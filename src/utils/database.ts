import { supabase } from "./supabase";

export const database = () => {
	
    const addWork = async (workname: string, date: string, url: string, description: string, images: File[]): Promise<any> => {
        try {
            const { data: id_data, error: id_error } = await supabase.from('works').select('id').order('id', {ascending: false }).limit(1);
            if (id_error) {
                throw new Error('Error fetching max work id: ' + id_error.message);
            }
            const folder_name = ((id_data?.[0]?.id || 0) + 1).toString()

            console.log(id_data)
            console.log(folder_name)


            const uploadData: any[] = [];
            const uploadPromises = images.map(async (image, index) => {
                const { data, error } = await supabase.storage.from('assets').upload(`works/${folder_name}/${index}`, image);
                if (error) {
                    throw new Error('Error uploading image: ' + error.message);
                }
                uploadData.push(data);
            });
            
            await Promise.all(uploadPromises);
              
            console.log(uploadData)
            const imagePathList: string[] = uploadData.map((item) => item.fullPath);
            console.log(imagePathList)


            const { data, error } = await supabase.from('works').insert([
                { name: workname, date: date, image: imagePathList, url: URL, description: description},
            ])
            .select()
            if (error) {
                throw new Error('Error uploading works: ' + error.message);
            }
            console.log(data)
        
            return imagePathList;
        } catch (error) {
            console.error('An error occurred:', (error as Error).message);
            return null;
        }
    }
    
    const getWorks = async (): Promise<any> => {
        try {
            const { data, error } = await supabase.from('works').select('*');
            if (error) {
                throw new Error('Error uploading image: ' + error.message);
            }
            return data
        } catch (error) {
            console.error('An error occurred:', (error as Error).message);
        }
    }
    
    return {
        addWork,
        getWorks
    }
}