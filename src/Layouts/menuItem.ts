import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Home Page',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Information Access',
    icon: { name: 'star-outline' },
    children: [
      {
        title: 'Lịch học',
        link: { href: '/extra-components/accordion' },
      },
      {
        title: 'Biểu học phí',
        link: { href: '/extra-components/actions' },
      },
      {
        title: 'Thời khóa biểu từng tuần',
        link: { href: '/extra-components/alert' },
      },
      {
        title: '(BLOC) Schedules',
        link: { href: '/extra-components/list' },
      },
      {
        title: 'Xem thời khóa biểu của một lớp',
        link: { href: '/extra-components/spinner' },
      },
      {
        title: 'Xem lịch thi',
        link: { href: '/extra-components/progress' },
      },
      {
        title: 'Xem đề cương môn học',
        link: { href: '/extra-components/tabs' },
      },
      {
        title: 'EduNext student guideline',
        link: { href: '/extra-components/chat' },
      },
      {
        title: 'Định hướng cho sinh viên',
        link: { href: '/extra-components/cards' },
      },
      {
        title: 'Flip Card',
        link: { href: '/extra-components/flip-card' },
      },
      {
        title: 'Reveal Card',
        link: { href: '/extra-components/reveal-card' },
      },
    ],
  },
  {
    title: 'Reports(Báo cáo)',
    icon: { name: 'edit-2-outline' },
    children: [
      {
        title: 'Báo cáo điểm danh',
        link: { href: '/forms/inputs' },
      },
      {
        title: 'Báo cáo điểm',
        link: { href: '/forms/form-layout' },
      },
      {
        title: 'Khung chương trình',
        link: { href: '/forms/buttons' },
      },
      {
        title: 'Tra cứu học phí đã nộp',
        link: { href: '/forms/select' },
      },
      {
        title: 'Lịch sử giao dịch',
        link: { href: '/forms/select' },
      },
    ],
  },
  {
    title: 'Feedback(Ý kiến)',
    icon: { name: 'keypad-outline' },
    children: [
      {
        title: 'Ý kiến về việc giảng dạy',
        link: { href: '/ui-features/grid' },
      },
      {
        title: 'Animated Searches',
        link: { href: '/ui-features/search' },
      },
    ],
  },
  {
    title: 'Registration/Application',
    icon: { name: 'browser-outline' },
    children: [
      {
        title: 'Popover',
        link: { href: '/modal-overlays/popover' },
      },
      {
        title: 'Tooltip',
        link: { href: '/modal-overlays/tooltip' },
      },
      {
        title: 'Toastr',
        link: { href: '/modal-overlays/toastr' },
      },
    ],
  },
  {
    title: 'Regulations(Các quy định)',
    icon: { name: 'browser-outline' },
    children: [
      {
        title: 'Popover',
        link: { href: '/modal-overlays/popover' },
      },
      {
        title: 'Tooltip',
        link: { href: '/modal-overlays/tooltip' },
      },
      {
        title: 'Toastr',
        link: { href: '/modal-overlays/toastr' },
      },
    ],
  },
  {
    title: 'Feedback',
    icon: { name: 'text-outline' },
    children: [
      {
        title: 'TinyMCE',
        link: { href: '/editors/tinymce' },
      },
      {
        title: 'CKEditor',
        link: { href: '/editors/ckeditor' },
      },
    ],
  },
  {
    title: 'Others(Khác)',
    icon: { name: 'shuffle-2-outline' },
    children: [
      {
        title: '404',
        link: { href: '/miscellaneous/404' },
      },
    ],
  },
  {
    title: 'Auth',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Login',
        link: { href: '/auth/login' },
      },
      {
        title: 'Register',
        link: { href: '/auth/register' },
      },
      {
        title: 'Request Password',
        link: { href: '/auth/request-password' },
      },
      {
        title: 'Reset Password',
        link: { href: '/auth/reset-password' },
      },
    ],
  },
];

export default items;
