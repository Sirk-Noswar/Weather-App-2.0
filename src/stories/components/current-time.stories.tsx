import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { CurrentTime, CurrentTimeProps } from "../../UIComponents/components/time/current-time";
import { TimeUnits } from "../../boilerplate/models";

export default {
    title: 'Components/Time/Current Time',
    component: CurrentTime
} as Meta

const Template: Story<CurrentTimeProps> = (args) => <CurrentTime {...args} />

export const Primary = Template.bind({})
Primary.args = {
    timeUnits: TimeUnits.civilian
}