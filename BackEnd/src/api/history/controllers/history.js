'use strict';

/**
 * history controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::history.history', {
    async createHistory(ctx) {
        const { user } = ctx.state;
        console.log(user);

        if (!user) {
            return ctx.unauthorized('You are not logged in');
        }

        const { data } = ctx.request.body;

        //const entity = await super.create(ctx);
        const entity = await strapi.service("api::history.history").create({data});
        console.log(entity);
        const updateHistory = await strapi.entityService.update(
            "api::history.history",
            entity.id,
            {
              data: {
                user: user.id,
              },
            }
          );

        return updateHistory;
    }
});
