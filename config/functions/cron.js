"use strict";

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }
  // // At every 30th minute.
  // "*/30 * * * *": () => {
  //   strapi.plugins["instagram-feed"].services[
  //     "instagram-feed"
  //   ].fetchInstagramFeed();
  // },
  // At every minute.
  "0 */3 * * *": () => {
    strapi.plugins["instagram-feed"].services[
      "instagram-feed"
    ].fetchInstagramFeed();
  },
};
