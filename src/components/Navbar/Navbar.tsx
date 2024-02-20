import { AppRoutes } from "../../Routing/AppRoutes";
import { Link } from "react-router-dom";
import { FC } from "react";

interface Button {
    label: string;
    route: string;
  }

const Navbar: FC = () => {
    const buttons: Button[] = [
        {
            label: 'Main',
            route: AppRoutes.MAIN
        },
        {
            label: 'Todos',
            route: AppRoutes.TODOS
        },
        {
            label: 'Albums',
            route: AppRoutes.ALBUMS
        },
        {
            label: 'Comment',
            route: AppRoutes.COMMENT
        },
    ]
    return (
        <div style={{
            width: '100%', 
            height: 40, 
            backgroundColor: 'yellow', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-evenly'
        }}>
            {buttons.map((btn, idx) => 
                <Link key={idx} to={btn.route} style={{textDecoration: 'none'}}>
                    {btn.label}
                </Link>)}
        </div>
    );
}

export default Navbar;