'use client';
import BarcodeIcon from '@/src/assets/icons/barcode';
import DateIcon from '@/src/assets/icons/date';
import FileIcon from '@/src/assets/icons/file';
import NoteTableIcon from '@/src/assets/icons/noteTable';
import SearchIcon from '@/src/assets/icons/search';
import AccordionRow from '@/src/components/accordion-row';
import Button from '@/src/components/button';
import Card from '@/src/components/card';
import Input from '@/src/components/input';
import InputTextarea from '@/src/components/InputTextarea';
import SelectInput from '@/src/components/select-input';
import { Accordion, Group, Radio } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { Dropzone } from '@mantine/dropzone';
import Image from 'next/image';
import dropImg from '@/src/assets/images/dropImg.png';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useCreateMaintenance } from '@/src/hooks/queries/maintenance';
import { useRouter } from 'next/navigation';
import ROUTES from '@/src/routes';
import { notifications } from '@mantine/notifications';

const dataLocation = [
  { value: '1', label: 'Location' },
  { value: '2', label: 'Location2' },
];

function Page() {
  const router = useRouter();
  const createMutation = useCreateMaintenance();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      product: '',
      quantity: 0,
      storeLocation: '',
      maintenancePeriod: 'Only once',
      dateRange: [null, null] as [Date | null, Date | null],
      reportedBy: '',
      assignedTo: '',
      maintenanceCost: 0,
      remarks: '',
      files: [],
      status: 'Not Repaired',
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const [from, to] = data.dateRange;

      const formData = {
        ...data,
        from: from?.toISOString(),
        to: to?.toISOString(),
        maintenancePeriod:
          data.maintenancePeriod === 'Only once'
            ? 'Once'
            : data.maintenancePeriod === 'Every Month'
            ? 'Monthly'
            : 'BiAnnually',
      };

      delete formData.dateRange;

      await createMutation.mutateAsync(formData);
      notifications.show({
        title: 'Success',
        message: 'Maintenance record created successfully',
        color: 'green',
      });
      router.push(ROUTES.PREMIUM.MAINTENANCE);
    } catch (error: any) {
      notifications.show({
        title: 'Error',
        message: error?.message || 'Failed to create maintenance record',
        color: 'red',
      });
    }
  };

  const onDraft = () => {
    const formData = watch();
    localStorage.setItem('maintenance_draft', JSON.stringify(formData));
    notifications.show({
      title: 'Success',
      message: 'Draft saved successfully',
      color: 'green',
    });
  };

  return (
    <div className="mb-section">
      <div className="flex mb-3 items-center justify-between gap-4 w-full">
        <h2 className="text-base mdl:text-2xl font-SemiBold">Maintenance Information</h2>
        <div className="flex items-center gap-3">
          <Button
            onClick={onDraft}
            className="!px-7 !text-xs h-9 hover:duration-300 text-black bg-grayBack border-none"
          >
            Save as draft
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            className="!px-7 !text-xs h-9 hover:duration-300"
            loading={createMutation.isPending}
          >
            Save this order
          </Button>
        </div>
      </div>

      <div className="flex gap-8 flex-col lgl:flex-row">
        <div className="flex flex-col gap-4 flex-1">
          <Card className="p-4">
            <div className="flex gap-y-5 gap-x-8 flex-wrap flex-col md:flex-row">
              <div className="bg-white rounded-xl h-16 border-green/50 border overflow-hidden min-w-[calc(50%-16px)] flex-1 flex">
                <Controller
                  name="product"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      leftSection={<SearchIcon fill="#0F2A43" className="w-4 h-auto" />}
                      placeholder="Search Products"
                      className="h-full w-[calc(100%-60px)]"
                      inputClassName="bg-white rounded-none w-full h-16 border-none"
                    />
                  )}
                />
                <button className="w-[60px] h-16 border-s border-green/50 flex items-center duration-300 justify-center hover:bg-blueLight/60">
                  <BarcodeIcon className="w-6 h-auto" fill="#0F2A43" />
                </button>
              </div>

              <Controller
                name="quantity"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    placeholder="Quantity"
                    className="h-full flex-1"
                    inputClassName="bg-white rounded-xl w-full h-16"
                  />
                )}
              />

              <Controller
                name="storeLocation"
                control={control}
                render={({ field }) => (
                  <SelectInput
                    {...field}
                    data={dataLocation}
                    placeholder="Store Location"
                    inputClassName="!h-16"
                    className="h-auto mdl:w-[calc(50%-16px)] min-w-[calc(50%-16px)] w-full"
                  />
                )}
              />
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="mb-3 font-SemiBold text-base">Maintenance Period</h3>
            <div className="mb-6 pb-7 border-b border-grayLight">
              <Controller
                name="maintenancePeriod"
                control={control}
                render={({ field }) => (
                  <Radio.Group {...field}>
                    <Group className="flex gap-2">
                      {['Only once', 'Every Month', 'Bi Annually'].map((item) => (
                        <Radio
                          key={item}
                          labelPosition="left"
                          value={item}
                          label={item}
                          color="#88BA52"
                          classNames={{
                            root: 'border border-green rounded-xl px-4 py-2 flex items-center cursor-pointer transition-all focus-within:ring-2 focus-within:ring-green-400',
                            label: 'text-sm cursor-pointer',
                          }}
                        />
                      ))}
                    </Group>
                  </Radio.Group>
                )}
              />
            </div>

            <Controller
              name="dateRange"
              control={control}
              render={({ field }) => (
                <DatePickerInput
                  {...field}
                  type="range"
                  leftSection={<DateIcon fill="#344050" className="w-5 h-auto" />}
                  placeholder="Choose Maintenance Period"
                  popoverProps={{
                    position: 'top',
                    classNames: {
                      dropdown: 'border-2 border-green rounded-xl shadow-lg shadow-green/40',
                    },
                  }}
                  className="h-auto w-full"
                  valueFormat="DD-MM-YYYY"
                  classNames={{
                    input:
                      'text-black text-grayMedium bg-white rounded-xl border border-green/50 h-16 placeholder:text-grayMedium placeholder:opacity-100',
                    day: 'data-[in-range]:bg-green data-[last-in-range]:rounded-e-[14px] data-[first-in-range]:rounded-s-[14px] p-0 rounded-3 data-[in-range]:text-white',
                    monthCell: 'px-0',
                    levelsGroup: 'justify-center mb-3',
                    weekday: 'text-black',
                    calendarHeader: 'text-grayMedium',
                  }}
                  minDate={new Date()}
                />
              )}
            />
          </Card>

          <Card className="p-4">
            <h3 className="mb-3 font-SemiBold text-base">Details</h3>
            <div className="flex gap-y-5 gap-x-8 flex-wrap flex-col md:flex-row">
              <Controller
                name="reportedBy"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Reported By"
                    placeholder="Write at least three characters of the name"
                    sectionType="user"
                    className="h-auto min-w-[calc(50%-16px)] flex-1"
                    inputClassName="bg-white rounded-xl h-16 border-green/50"
                  />
                )}
              />

              <Controller
                name="assignedTo"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Assigned To"
                    placeholder="Write at least three characters of the name"
                    sectionType="user"
                    className="h-auto min-w-[calc(50%-16px)] flex-1"
                    inputClassName="bg-white rounded-xl h-16 border-green/50"
                  />
                )}
              />

              <Controller
                name="maintenanceCost"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    label="Maintenance Cost"
                    leftSection={<span className="text-lg">USD</span>}
                    inputClassName="bg-white rounded-xl h-16 border-green/50 ps-11"
                    className="h-auto min-w-[calc(50%-16px)]"
                  />
                )}
              />
            </div>
          </Card>
        </div>

        <Card className="w-full lgl:w-[520px] p-4">
          <Accordion variant="separated" className="flex flex-col gap-6">
            <AccordionRow
              title="Remarks"
              icon={() => <NoteTableIcon fill="#0F2A43" className="w-full h-auto" />}
            >
              <Controller
                name="remarks"
                control={control}
                render={({ field }) => (
                  <InputTextarea
                    {...field}
                    placeholder="Add remarks here"
                    autosize
                    className="mb-4 duration-200 bg-white rounded-2xl text-grayMedium"
                  />
                )}
              />
            </AccordionRow>

            <AccordionRow
              title="Files"
              icon={() => <FileIcon fill="#0F2A43" className="w-full h-auto" />}
            >
              <Controller
                name="files"
                control={control}
                render={({ field: { onChange } }) => (
                  <Dropzone
                    onDrop={(files) => onChange(files)}
                    multiple={true}
                    maxSize={3 * 1024 ** 2}
                    className="w-full p-10 place-content-center rounded-2xl border-green/50 bg-white overflow-hidden border-solid border"
                  >
                    <div className="h-full place-content-center w-full flex justify-center items-center flex-col gap-3">
                      <Image
                        src={dropImg}
                        alt="dropImg"
                        width={160}
                        height={116}
                        className="w-[160px] h-[116px] mx-auto"
                      />
                      <p className="text-base font-Regular text-grayMedium text-center">
                        Click to browse images Or Drag and Drop your image here
                      </p>
                    </div>
                  </Dropzone>
                )}
              />
            </AccordionRow>
          </Accordion>
        </Card>
      </div>
    </div>
  );
}

export default Page;
