import { FRONTEND, TRESD } from '@/lib/constants'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProjectItem } from './ProjectItem'
export default function Projects() {
  return (
    <section className="web">
      <Tabs defaultValue="web" className="w-full">
        <TabsList className="ml-0 flex w-full flex-nowrap sm:ml-12 sm:w-fit">
          <TabsTrigger value="web" className=" px-3 py-3">
            Desarrollo Web
          </TabsTrigger>
          <TabsTrigger value="tresd" className="w-full px-3 py-3">
            Modelado 3D
          </TabsTrigger>
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
