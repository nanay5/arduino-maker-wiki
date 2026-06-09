import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://arduino-maker.wiki',
  integrations: [
    starlight({
      title: 'Arduino AI 创客教育 Wiki',
      description: '免费开源 Arduino 教程 · AI 创客项目 · 学校课堂方案',
      defaultLocale: 'zh-CN',
      locales: {
        'zh-CN': { label: '简体中文' },
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: '🏠 首页', link: '/' },
        {
          label: '🧑‍🎓 学生区',
          items: [
            { label: '闪烁LED — 第一行代码', link: '/students/led-blink/' },
            { label: '蜂鸣器音乐', link: '/students/buzzer-music/' },
            { label: '光控灯', link: '/students/light-switch/' },
            { label: '温度报警器', link: '/students/temp-alarm/' },
            { label: '电机控制基础', link: '/students/motor-ctrl/' },
            { label: '舵机控制', link: '/students/servo-sweep/' },
            { label: '红外遥控', link: '/students/ir-remote/' },
            { label: '超声波避障小车', link: '/students/ultrasonic/' },
            { label: '红外循迹小车', link: '/students/line-follow/' },
            { label: '蓝牙遥控小车', link: '/students/bluetooth-rc/' },
          ],
        },
        {
          label: '👩‍🏫 教师区',
          items: [
            { label: '16课时教学计划', link: '/teachers/16-plan/' },
            { label: '课堂组织流程', link: '/teachers/classroom/' },
            { label: '学生作品评价量表', link: '/teachers/evaluation/' },
            { label: '开课常见问题', link: '/teachers/faq/' },
          ],
        },
        {
          label: '👨‍👩‍👧 家长区',
          items: [
            { label: '学生作品展示', link: '/parents/showcase/' },
            { label: '本课程 vs 普通编程课', link: '/parents/versus/' },
          ],
        },
        {
          label: '🔧 硬件文档',
          items: [
            { label: '套件清单与对比', link: '/hardware/kits/' },
            { label: '故障排查索引', link: '/hardware/troubleshooting/' },
          ],
        },
        {
          label: '🚀 高阶路线',
          items: [],
        },
      ],
      head: [
        {
          tag: 'link',
          attrs: { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        },
      ],
      pagefind: {
        searchOptions: {
          language: 'zh',
        },
      },
    }),
  ],
});
