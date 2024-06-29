'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { Globe } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    <Select
      onValueChange={(value) => {
        handleChange(value);
      }}
      defaultValue={currentLocale}
    >
      <SelectTrigger className='w-[146px]'>
        <Globe className='text-primary h-5 w-5 mr-2' />
        <SelectValue placeholder={i18n.resolvedLanguage} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='zh-CN'>中文-简体</SelectItem>
        <SelectItem value='en-US'>English-US</SelectItem>
      </SelectContent>
    </Select>
  );
}
