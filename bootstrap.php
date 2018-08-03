<?php
/**
 *  This file is part of reflar/reactions
 *
 *  Copyright (c) ReFlar.
 *
 *  For the full copyright and license information, please view the license.md
 *  file that was distributed with this source code.
 */
namespace Reflar\Enso;
use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;
return [
    function (Dispatcher $events) {
        $events->subscribe(Listeners\AddClientAssets::class);
    },
];