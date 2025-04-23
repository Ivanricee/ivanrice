import { FRONTEND, TRESD } from '@/lib/constants'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProjectItem } from './ProjectItem'
export default function Projects() {
  return (
    <section className="web">
      <Tabs defaultValue="web" className="w-full">
        <TabsList className="ml-12 flex w-fit flex-nowrap">
          <TabsTrigger value="web">Desarrollo Web</TabsTrigger>
          <TabsTrigger value="tresd">Modelado 3D</TabsTrigger>
        </TabsList>
        <TabsContent value="web">
          <ProjectItem type={FRONTEND} />
        </TabsContent>
        <TabsContent value="tresd">
          <ProjectItem type={TRESD} />
        </TabsContent>
      </Tabs>
    </section>
  )
}
