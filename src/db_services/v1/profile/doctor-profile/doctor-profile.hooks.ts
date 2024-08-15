import * as authentication from '@feathersjs/authentication';
import { disallow, iff, isProvider } from 'feathers-hooks-common';
import SetDefaultItem from '../../../../hooks/SetDefaultItem';
import { EntityStatus } from '../../../../global_interface/Interface';
import PatchDeleted from '../../../../hooks/PatchDeleted';
import * as local from '@feathersjs/authentication-local';

const { protect } = local.hooks;
// Don't remove this comment. It's needed to format import lines nicely.


export default {
    before: {
        all: [iff(isProvider('server')).else(disallow())],
        find: [],
        get: [],
        create: [SetDefaultItem('status', EntityStatus.ACTIVE)],
        update: [],
        patch: [],
        remove: [PatchDeleted()],
    },

    after: {
        all: [protect('metadata')],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
};
