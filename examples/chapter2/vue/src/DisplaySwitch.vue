<template>
    <div>
        <StyledHeading>{{heading}}</StyledHeading>
        <option-label text="表示" :onClicked="onChanged"/>
        <switcher :toggle="display" :onChanged="onChanged" />
    </div>
</template>

<script>
import styled from "vue-styled-components";
import { OptionLabel, Switcher } from "./components/";

const StyledHeading = styled.h1`
  font-size: 16px;
`;

export default {
    name: 'display-switch',
    data: function() {
        return {
            display: false
        }
    },
    props: {
        heading: String
    },
    components: {
        OptionLabel,
        Switcher,
        StyledHeading
    },
    methods: {
        onChanged () {
            this.display = !this.display
        }
    }
}
</script>