<template lang="pug">
.home
  nav.ph3.ph5-ns.pv4
    .nowrap.overflow-x-auto
      a.link.dim.gray.f5.f4-ns.dib.mr3(@click="filter('lgbt')") LGBT
      a.link.dim.gray.f5.f4-ns.dib.mr3(@click="filter('women_rights')") WOMEN'S RIGHTS
      a.link.dim.gray.f5.f4-ns.dib.mr3(@click="filter('immigration')") IMMIGRATION
      a.link.dim.gray.f5.f4-ns.dib.mr3(@click="reset()") clear
  ul
    li(v-for='organization in organizations')
      org-block(v-bind:organization='organization')
</template>

<script>
import OrganizationBlock from './OrganizationBlock'

export default {
    name: 'home',
    components: {
        'org-block': OrganizationBlock
    },
    data () {
        return {
            msg: 'Organizations',
            originalData: [
                {name: 'Boys and Girls Club', desc: 'Here is what they do.', filter: 'lgbt,women_rights,immigration'},
                {name: 'Org 2', desc: 'Here is what they do.', filter: 'women_rights'},
                {name: 'Org 3', desc: 'Here is what they do.', filter: ''},
                {name: 'Org 4', desc: 'Here is what they do.', filter: 'lgbt,women_rights,immigration'},
                {name: 'Org 5', desc: 'Here is what they do.', filter: 'lgbt,immigration'},
                {name: 'Org 6', desc: 'Here is what they do.', filter: 'lgbt,women_rights'},
                {name: 'Org 7', desc: 'Here is what they do.', filter: 'women_rights'},
                {name: 'Org 8', desc: 'Here is what they do.', filter: 'immigration'}
            ],
            organizations: [
                {name: 'Boys and Girls Club', desc: 'Here is what they do.', filter: 'lgbt,immigration'},
                {name: 'Org 2', desc: 'Here is what they do.', filter: 'women_rights'},
                {name: 'Org 3', desc: 'Here is what they do.', filter: ''},
                {name: 'Org 4', desc: 'Here is what they do.', filter: 'lgbt,women_rights,immigration'},
                {name: 'Org 5', desc: 'Here is what they do.', filter: 'lgbt,immigration,women_rights'},
                {name: 'Org 6', desc: 'Here is what they do.', filter: 'lgbt,women_rights'},
                {name: 'Org 7', desc: 'Here is what they do.', filter: 'women_rights'},
                {name: 'Org 8', desc: 'Here is what they do.', filter: 'immigration,women_rights'}
            ]
        }
    },
    methods: {
        filter (filterBy) {
            var filteredData = []

            console.log('info', filterBy)
            this.originalData.forEach((org) => {
                console.log('info', org)
                if (org.filter.split(',').includes(filterBy)) {
                    console.log('info', 'true')
                    filteredData.push(org)
                }
            })

            this.organizations = filteredData
        },
        reset () {
            this.organizations = this.originalData
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
