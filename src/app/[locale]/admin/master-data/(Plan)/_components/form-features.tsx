"use client";
import SearchIcon from "@/src/assets/icons/search";
import Button from "@/src/components/button";
import Card from "@/src/components/card";
import Input from "@/src/components/input";
import { Checkbox, ScrollArea, Stack } from "@mantine/core";
import React, { ChangeEvent, useState } from "react";
interface Feature {
  id: number;
  label: string;
  checked: boolean;
}

interface FeatureGroup {
  id: number;
  title: string;
  features: Feature[];
}
function FormFeatures() {
  const [featureGroups, setFeatureGroups] = useState<FeatureGroup[]>([
    {
      id: 1,
      title: "Rental Website Features",
      features: [
        { id: 1, label: "Unlimited listings", checked: true },
        { id: 2, label: "24/7 support", checked: true },
        { id: 3, label: "Priority placement", checked: true },
        { id: 4, label: "Advanced analytics", checked: true },
      ],
    },
    {
      id: 2,
      title: "Payment Features",
      features: [
        { id: 1, label: "Unlimited listings", checked: true },
        { id: 2, label: "24/7 support", checked: false },
        { id: 3, label: "Priority placement", checked: false },
        { id: 4, label: "Advanced analytics", checked: true },
      ],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [newItem, setNewItem] = useState<{ [key: number]: string }>({});

  const handleCheckboxChange = (groupId: number, featureId: number) => {
    setFeatureGroups((prev) =>
      prev.map((group) =>
        group.id === groupId
          ? {
              ...group,
              features: group.features.map((feature) =>
                feature.id === featureId
                  ? { ...feature, checked: !feature.checked }
                  : feature
              ),
            }
          : group
      )
    );
  };

  const handleAddItem = (groupId: number) => {
    if (newItem[groupId]?.trim()) {
      setFeatureGroups((prev) =>
        prev.map((group) =>
          group.id === groupId
            ? {
                ...group,
                features: [
                  ...group.features,
                  {
                    id: group.features.length + 1,
                    label: newItem[groupId],
                    checked: false,
                  },
                ],
              }
            : group
        )
      );
      setNewItem((prev) => ({ ...prev, [groupId]: "" }));
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleNewItemChange = (groupId: number, value: string) => {
    setNewItem((prev) => ({ ...prev, [groupId]: value }));
  };

  return (
    <>
      {featureGroups.map((group) => (
        <Card key={group.id} className="flex-1 p-6 min-w-full mdl:min-w-[50%] max-w-[50%]">
          <div className="flex justify-between flex-col h-full">
            <div className="flex md:items-center flex-col md:flex-row gap-4 mb-5 ">
              {" "}
              <h3>{group.title}</h3>
              <Input
                placeholder={`Search in ${group.title}`}
                value={searchTerm}
                onChange={handleSearchChange}
                inputClassName="bg-white !rounded-2xl border-green h-12"
                leftSection={
                  <SearchIcon className="w-4 h-auto" fill="#0F2A43" />
                }
                className="flex-1"
              />
            </div>

            <div className="flex flex-col gap-5 mb-8 flex-1">
              {group.features
                .filter((feature) =>
                  feature.label.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((feature) => (
                  <Checkbox
                    color="#88BA52"
                    key={feature.id}
                    label={feature.label}
                    checked={feature.checked}
                    onChange={() => handleCheckboxChange(group.id, feature.id)}
                  />
                ))}
            </div>

            <div className="flex flex-col gap-6">
              <Input
                placeholder="Write here new item"
                value={newItem[group.id] || ""}
                onChange={(e) => handleNewItemChange(group.id, e.target.value)}
                inputClassName="bg-white !rounded-xl border-green h-11"
              />
              <Button
                className={
                  " flex-1 h-10 min-h-10 w-fit text-base hover:shadow-md !px-11 text-black bg-blueLight border-none"
                }
                onClick={() => handleAddItem(group.id)}
              >
                Add Item
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}

export default FormFeatures;
