import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import './AppBar.css';

type BreadcrumbProps = {
  crumbs: string[];
}

export const BreadcrumbBar = ({ crumbs }: BreadcrumbProps) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="odin2-app-breadcrumbbar">
      <Link underline="hover" color="inherit" href="/">
        {crumbs[0]}
      </Link>
      <Typography color="text.primary">{crumbs[1]}</Typography>
    </Breadcrumbs>
  );
};
