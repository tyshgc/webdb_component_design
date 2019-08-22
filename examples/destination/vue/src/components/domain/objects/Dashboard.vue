<template>
    <div>
        <heading text="宛先" />
        <ul>
            <li>
                <router-link to="/reference">確認</router-link>
            </li>
            <li>
                <router-link to="/registration">登録</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
/**
 * ダッシュボード
 * Dashboard Domain Object Component
 */

// Components
import { Heading } from "@/components/gui/parts";

export default {
    name: 'Dashboard',
    components: {
        Heading
    }
}
</script>





