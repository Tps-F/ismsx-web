import { supabase } from "./supabase";

export const database = () => {
	
    const addWork = async (file: any) => {
        try {
            const { data: id_data, error: id_error } = await supabase.from('works').select('id', { order: { by: 'id', descending: true }, limit: 1 });
            if (id_error) {
                throw new Error('Error fetching max work id: ' + id_error.message);
            }
            const folder_name = ((id_data?.[0]?.id || 0) + 1).toString()
            const { data, error } = await supabase.storage.from('assets').upload(`works/${folder_name}`, file);
            if (error) {
                throw new Error('Error uploading image: ' + error.message);
            }
            return data;
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