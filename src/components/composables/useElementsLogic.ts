import { reactive } from 'vue';
import axios from 'axios';
import type {iData} from '@/types/elements';


export function useElementsLogic() { 
  const data = reactive<iData>({
    // input
    placeholder: 'https://',
    currentUrl: '',
    title: '',
    isEditing: false,
    url: '',
    // time
    buttondisplay: null,
    // select
    selectedValues: [],
    //table
    options: [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 }
    ],
    //table search
    dataTable: [
      { name: 'Иван Иванов', age: 28, city: 'Москва' },
      { name: 'Мария Петрова', age: 34, city: 'Санкт-Петербург' },
      { name: 'Алексей Смирнов', age: 22, city: 'Новосибирск' },
      { name: 'Елена Кузнецова', age: 45, city: 'Екатеринбург' },
      { name: 'Дмитрий Попов', age: 30, city: 'Казань' },
      { name: 'Ольга Соколова', age: 27, city: 'Челябинск' },
      { name: 'Андрей Морозов', age: 31, city: 'Самара' },
      { name: 'Наталья Васильева', age: 29, city: 'Уфа' },
      { name: 'Юрий Николаев', age: 40, city: 'Пермь' },
      { name: 'Анна Иванова', age: 26, city: 'Ростов-на-Дону' }
    ],
    fieldOptions: [
      { label: 'Имя', value: 'name' },
      { label: 'Возраст', value: 'age' },
      { label: 'Город', value: 'city' },
    ]
  });

  const fetchTitle = async (url: string): Promise<string | null> => {
    return await axios.get(url)
      .then(res => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(res.data, 'text/html');
        const title = (doc as any).querySelector('title').innerText;
        return title;
      })
      .catch(err => {
        console.error('Ошибка при получении заголовка:', err);
        return null;
      });
  };
  
  const handleBlur = async (): Promise<void> => {
    if (data.currentUrl) {
      data.title = await fetchTitle(data.currentUrl);
      data.url = data.currentUrl;
      data.isEditing = false;
    }
  };
  
  const handleEnter = async () => {
    await handleBlur();
  };
  

  return { 
    data, 
    handleEnter,
    handleBlur
  };
}