import { useRouter } from 'next/router';
import React from 'react';

const ProjectPage = () => {
  const router = useRouter();
  return <div>
    <button onClick={router.back}>back</button>
    page {router.query.projectId}
  </div>;
};

export default ProjectPage;
