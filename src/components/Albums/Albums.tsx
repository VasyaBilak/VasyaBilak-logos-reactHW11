import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsThunk } from '../../redux/action/postsAction';
import { Albums as IAlbums } from "../../redux/reducers/postsReducer";
import { AppDispatch, AppStateType } from "../../redux/store";
import { FC } from "react";

const Albums: FC = () => {
    const albums = useSelector((store: AppStateType): IAlbums[] | [] => store.albumsReducer.albums);
    const dispatch: AppDispatch = useDispatch();
    const getAlbums = () => dispatch(getAlbumsThunk());
  
    useEffect(() => {
      getAlbums();
    }, []);
  
    return (
      <div>
        <h2>Albums</h2>
        {albums?.map((album: IAlbums)=> {
                return  (
                        <div key={album.id} style={{border: '1px solid black', margin: '10px'}}>
                            <p>{album.id}</p>
                            <h4>{album.title}</h4>
                        </div>
                    )
            })}
      </div>
    );
  }

  export default Albums;