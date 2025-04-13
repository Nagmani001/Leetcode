"use client"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Description from "../../components/description";
import TestCase from "../../components/testCase";
import EditorNag from "../../components/editor";
import { Button } from "@/components/ui/button";

export default async function({ params }: {
  params: {
    problemId: string
  }
}) {
  const param = await params.problemId;
  return (
    <div className="h-screen w-screen flex flex-col bg-backgroundColor">
      <div className="p-4">
        <div className="flex justify-between">
          <div>
            logo and title
          </div>
          <div>
            <Button>Run</Button>
            <Button>submit</Button>
          </div>
          <div>
            user details
          </div>
        </div>

      </div>
      <div className="flex-1 flex">
        <PanelGroup direction="horizontal">
          <Panel className="">
            <div className="h-full w-full" >
              <Description />
            </div>
          </Panel>
          <PanelResizeHandle>
            <div className="hover:bg-slate-200 w-3 h-full"></div>
          </PanelResizeHandle>
          <Panel>
            <div className="flex flex-col h-full w-full">
              <PanelGroup direction="vertical">
                <Panel>
                  <div className="h-full w-full">
                    <EditorNag />
                  </div>
                </Panel>
                <PanelResizeHandle>
                  <div className="hover:bg-slate-200 h-3 w-full"></div>
                </PanelResizeHandle>
                <Panel>
                  <div className="h-full w-full ">
                    <TestCase />
                  </div>
                </Panel>
              </PanelGroup>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  )
}
