<template>
  <AppHeaderDropdown
    right
    no-caret
  >
    <template slot="header">
      <img
        :src="me.avatar"
        class="img-avatar"
        :alt="me.displayName"
      >
    </template>\
    <template slot="dropdown">
      <b-dropdown-header
        tag="div"
        class="text-center"
      >
        <strong>Settings</strong>
      </b-dropdown-header>
      <b-dropdown-item href="/logout"><i class="fa fa-lock" /> Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script lang="ts">
import gql from "graphql-tag";

import { HeaderDropdown as AppHeaderDropdown } from "@coreui/vue";
export default {
  name: "DefaultHeaderDropdownAccnt",
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return {
      me: { avatar: "", displayName: "Donald Trump" }
    };
  },

  apollo: {
    me: {
      query: gql`
        {
          me {
            id
            givenName
            familyName
            displayName
            role
            auth0Id
            avatar
            adminRoles
          }
        }
      `
    }
  }
};
</script>
