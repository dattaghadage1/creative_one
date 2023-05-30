<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <mini-statistics-card
                title="Today's Money"
                value="$53,000"
                description="<span
                  class='text-sm font-weight-bolder text-success'
                  >+55%</span> since yesterday"
                :icon="{
                  component: 'ni ni-money-coins',
                  background: 'bg-gradient-primary',
                  shape: 'rounded-circle'
                }"
              />
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <mini-statistics-card
                title="Today's Users"
                value="2,300"
                description="<span
                  class='text-sm font-weight-bolder text-success'
                  >+3%</span> since last week"
                :icon="{
                  component: 'ni ni-world',
                  background: 'bg-gradient-danger',
                  shape: 'rounded-circle'
                }"
              />
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <mini-statistics-card
                title="New Clients"
                value="+3,462"
                description="<span
                  class='text-sm font-weight-bolder text-danger'
                  >-2%</span> since last quarter"
                :icon="{
                  component: 'ni ni-paper-diploma',
                  background: 'bg-gradient-success',
                  shape: 'rounded-circle'
                }"
              />
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <mini-statistics-card
                title="Sales"
                value="$103,430"
                description="<span
                  class='text-sm font-weight-bolder text-success'
                  >+5%</span> than last month"
                :icon="{
                  component: 'ni ni-cart',
                  background: 'bg-gradient-warning',
                  shape: 'rounded-circle'
                }"
              />
          </div>
        </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import MiniStatisticsCard from "../examples/cards/MiniStatisticsCard.vue";
  
  import image2 from "../assets/img/img-2.jpg";
  import image1 from "../assets/img/img-1.jpg";
  import image3 from "../assets/img/img-3.jpg";
  
  import team1 from "../assets/img/team-1.jpg";
  import team2 from "../assets/img/team-2.jpg";
  import team5 from "../assets/img/team-5.jpg";
  import team4 from "../assets/img/team-4.jpg";
  
  import jira from "../assets/img/small-logos/logo-jira.svg";
  import asana from "../assets/img/small-logos/logo-asana.svg";
  import spotify from "../assets/img/small-logos/logo-spotify.svg";
  import bootstrap from "../assets/img/small-logos/bootstrap.svg";
  import invision from "../assets/img/small-logos/logo-invision.svg";
  import slack from "../assets/img/small-logos/logo-slack.svg";
  import adobe from "../assets/img/small-logos/logo-xd.svg";
  
  import DE from "../assets/img/icons/flags/DE.png";
  import US from "../assets/img/icons/flags/US.png";
  import GB from "../assets/img/icons/flags/GB.png";
  import BR from "../assets/img/icons/flags/BR.png";
  
  export default {
    name: "DashboardKPI",
    components: {
      MiniStatisticsCard,
    },
    data() {
      return {
        image2,
        image1,
        image3,
        team1,
        team2,
        team5,
        team4,
        jira,
        asana,
        spotify,
        bootstrap,
        invision,
        slack,
        adobe,
        sales: {
          us: {
            country: "United States",
            sale: 2500,
            value: "$230,900",
            bounce: "29.9%",
            flag: US
          },
          germany: {
            country: "Germany",
            sale: "3.900",
            value: "$440,000",
            bounce: "40.22%",
            flag: DE
          },
          britain: {
            country: "Great Britain",
            sale: "1.400",
            value: "$190,700",
            bounce: "23.44%",
            flag: GB
          },
          brasil: {
            country: "Brasil",
            sale: "562",
            value: "$143,960",
            bounce: "32.14%",
            flag: BR
          }
        }
      };
    }
  };
  </script>
  