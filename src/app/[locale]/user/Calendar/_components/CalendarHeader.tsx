import React from "react"
import { Select } from "@mantine/core"
import DownIcon from "@/src/assets/icons/down"
import Button from "@/src/components/button"
import RentSwitch from "@/src/components/RentSwitch"
import { getMonthsForCurrentYear } from "@/src/lib/utils"

interface CalendarHeaderProps {
  selectedDate: string | null
  setSelectedDate: (date: string | null) => void
  currentView: string
  handleViewChange: (view: string) => void
}

const CalendarHeader: React.FC<CalendarHeaderProps> = React.memo(
  ({ selectedDate, setSelectedDate, currentView, handleViewChange }) => {
    const months = getMonthsForCurrentYear()

    return (
      <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
        <Select
          value={selectedDate}
          onChange={setSelectedDate}
          data={months}
          leftSectionPointerEvents="none"
          rightSection={<DownIcon />}
          placeholder="Select category"
          searchable
          classNames={{
            input:
              "text-black rounded-xl w-[190px] text-sm lg:text-base font-semibold h-full border-none placeholder:text-grayMedium placeholder:opacity-100",
            wrapper: "h-full",
            dropdown: "bg-white text-black rounded-xl border border-green/50 py-2 text-sm lg:text-base",
            option: "hover:bg-green hover:text-white duration-300 text-sm lg:text-base",
          }}
          className="h-10 order-2 mdl:order-1 duration-200 min-h-10 bg-white rounded-xl border border-green text-grayMedium"
        />

        <div className="flex items-center justify-center order-1 mdl:order-2 w-full mdl:w-fit mb-8 mdl:mb-0">
          <RentSwitch typeUser="user" />
        </div>
        <div className="flex items-center gap-5 order-3">
          <Button
            className={`text-sm px-2 py-1 h-10 mdl:h-12 ${
              currentView === "resourceTimelineMonth"
                ? ""
                : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
            }`}
            onClick={() => handleViewChange("resourceTimelineMonth")}
          >
            Daily
          </Button>
          <Button
            className={`text-sm px-4 py-1 h-10 mdl:h-12 ${
              currentView === "resourceTimelineWeek"
                ? ""
                : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
            }`}
            onClick={() => handleViewChange("resourceTimelineWeek")}
          >
            Weekly
          </Button>
        </div>
      </div>
    )
  },
)

CalendarHeader.displayName = "CalendarHeader"

export default CalendarHeader

