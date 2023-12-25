export default function App() {
    return (
        <aside class="h-admin-full-card-height grid-cols-1">

        <x-admin.card>
    
            {/* {{--    User's Name and Photo Section    --}} */}
    
            <div class="flex justify-start items-center">
    
                <img
                    src="/storage/media/images/admin/test-profile.jpg"
                    alt="profile-pic"
                    class="w-10 h-10 rounded-full"/>
    
                <span class="mr-4 text-xl font-bold text-t-primary">عرفان دهقانی</span>
    
            </div>
    
            {/* {{--    End    --}} */}
    
    
            {/* {{--    Navigation items    --}} */}
    
            <div class="py-4 space-y-2 grow">
    
                {/* @livewire('admin.nav-item', [
                'name'=>'داشبورد',
                'icon'=>'dashboard',
                'link'=>'dashboard'
                ])
    
                @livewire('admin.nav-item', [
                'name'=>'دسته بندی',
                'icon'=>'category',
                'link'=>'categories'
                ])
    
                @livewire('admin.nav-item', [
                'name'=>'محصولات',
                'icon'=>'gift',
                'link'=>'products'
                ])
    
                @livewire('admin.nav-item', [
                'name'=>'سفارشات',
                'icon'=>'shopping-card',
                'link'=>'orders'
                ])
    
                @livewire('admin.nav-item', [
                'name'=>'کاربران',
                'icon'=>'users',
                'link'=>'users'
                ])
    
    {{--            @livewire('admin.nav-item', [--}}
    {{--            'name'=>'انبار',--}}
    {{--            'icon'=>'storage',--}}
    {{--            'link'=>'storage'--}}
    {{--            ])--}}
    
    {{--            @livewire('admin.nav-item', [--}}
    {{--            'name'=>'تخفیفات و آفر ها',--}}
    {{--            'icon'=>'price-tag',--}}
    {{--            'link'=>'offers'--}}
    {{--            ])--}}
    
    {{--            @livewire('admin.nav-item', [--}}
    {{--            'name'=>'تنظیمات',--}}
    {{--            'icon'=>'settings',--}}
    {{--            'link'=>'settings'--}}
    {{--            ])--}} */}
    
            </div>
    
            {/* {{--    End    --}} */}
    
    
            {/* {{--    Logiut button on the bottom of the nav    --}} */}
    
            <div>
                <a href="/admin/logout"
                   class="flex items-center justify-start font-normal hover:font-bold fill-auxulary px-4 py-2 rounded-full hover:fill-secondary duration-100 mt-2"
                >
                    <div class="w-7 flex justify-center items-center">
                        @include("icons.exit")
                    </div>
                    <span class="mr-4">خروج از حساب کاربری</span>
    
                </a>
            </div>
    
            {/* {{--    End    --}} */}
    
        </x-admin.card>
    
    </aside>
    
    )
  }