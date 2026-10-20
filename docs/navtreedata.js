/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Configurable Multiagent System for Plug&Produce", "index.html", [
    [ "CMAS Main Page", "index.html", "index" ],
    [ "Agent action", "agentaction_page.html", [
      [ "State Entry Behavior", "agentaction_page.html#autotoc_md0", null ],
      [ "Procedures", "agentaction_page.html#autotoc_md1", [
        [ "Constructor", "agentaction_page.html#agent_constructor", null ],
        [ "onDepot", "agentaction_page.html#onDepot", null ],
        [ "onDelpoy", "agentaction_page.html#onDeploy", null ],
        [ "Running", "agentaction_page.html#Running", null ],
        [ "onRun (agent)", "agentaction_page.html#onrun", null ],
        [ "onFail", "agentaction_page.html#onfail", null ],
        [ "onUndeploy", "agentaction_page.html#onundeploy", null ],
        [ "onFinished", "agentaction_page.html#onfinished", null ],
        [ "onStop", "agentaction_page.html#onstop", null ]
      ] ],
      [ "Preconditions", "agentaction_page.html#autotoc_md2", [
        [ "Activate", "agentaction_page.html#activate", null ],
        [ "Failed", "agentaction_page.html#failed", null ],
        [ "Deactivate", "agentaction_page.html#deactivate", null ]
      ] ],
      [ "Randomized retry jitter", "agentaction_page.html#autotoc_md3", [
        [ "RetryJitter", "agentaction_page.html#retryjitter", null ],
        [ "RetryBackoff", "agentaction_page.html#retrybackoff", [
          [ "Timing illustration", "agentaction_page.html#autotoc_md4", null ]
        ] ]
      ] ]
    ] ],
    [ "CMAS Command Line Arguments", "commandline_page.html", [
      [ "Command Line", "commandline_page.html#autotoc_md5", [
        [ "Preferences and Command-Line Overrides", "commandline_page.html#autotoc_md7", null ],
        [ "General Options", "commandline_page.html#autotoc_md9", null ],
        [ "Application", "commandline_page.html#autotoc_md11", null ],
        [ "Editor", "commandline_page.html#autotoc_md13", null ],
        [ "RunTime", "commandline_page.html#autotoc_md15", null ],
        [ "Safety", "commandline_page.html#autotoc_md17", null ],
        [ "PathFinder", "commandline_page.html#autotoc_md19", null ],
        [ "Process Plan (Java)", "commandline_page.html#autotoc_md21", null ],
        [ "Developer Modes", "commandline_page.html#autotoc_md23", null ],
        [ "Example Usage", "commandline_page.html#autotoc_md25", null ]
      ] ]
    ] ],
    [ "Deployment", "deployment_page.html", [
      [ "Creating and Using Batch Objects in CMAS", "deployment_page.html#batches", [
        [ "How to Create a Batch Object", "deployment_page.html#autotoc_md26", null ],
        [ "Opening the Batch Editor", "deployment_page.html#autotoc_md27", null ],
        [ "Using the Batch Editor", "deployment_page.html#autotoc_md28", null ],
        [ "Running", "deployment_page.html#autotoc_md29", null ]
      ] ],
      [ "Creating and Using Deployment Agents in CMAS", "deployment_page.html#create_deploymentagent", [
        [ "How to Create a Deployment Agent", "deployment_page.html#autotoc_md30", null ],
        [ "Working with Batches in a Deployment Agent", "deployment_page.html#autotoc_md31", null ],
        [ "Deployment Agent Properties", "deployment_page.html#autotoc_md32", [
          [ "<b>NumberOfTimes</b>", "deployment_page.html#autotoc_md33", null ],
          [ "<b>VariableTrigger</b>", "deployment_page.html#autotoc_md34", null ],
          [ "<b>DeploymentTime</b>", "deployment_page.html#autotoc_md35", null ],
          [ "<b>DeployAt</b>", "deployment_page.html#autotoc_md36", null ]
        ] ]
      ] ],
      [ "User defined logics for deployment", "deployment_page.html#deployment_logic", [
        [ "Centralized Deployment Agent", "deployment_page.html#autotoc_md37", null ],
        [ "Local Deployment", "deployment_page.html#autotoc_md38", null ]
      ] ]
    ] ],
    [ "CMAS Examples", "examples_page.html", "examples_page" ],
    [ "Goal Charts", "goalcharts_page.html", [
      [ "The Goal Chart Editor", "goalcharts_page.html#autotoc_md102", null ],
      [ "Goal chart blocks", "goalcharts_page.html#autotoc_md103", [
        [ "Precondition", "goalcharts_page.html#precondition", null ],
        [ "Breakpoints", "goalcharts_page.html#autotoc_md104", null ],
        [ "Parallel", "goalcharts_page.html#parallel_block", null ],
        [ "Parallel Ordered", "goalcharts_page.html#parallelordered_block", null ],
        [ "Unordered", "goalcharts_page.html#unordered_block", null ],
        [ "Alternative", "goalcharts_page.html#alternative_block", null ],
        [ "Actions", "goalcharts_page.html#action_block", null ],
        [ "Requirement", "goalcharts_page.html#requirement_block", null ],
        [ "Done", "goalcharts_page.html#done_block", null ],
        [ "Fail", "goalcharts_page.html#fail_block", null ],
        [ "Interrupt", "goalcharts_page.html#interrupt_block", null ],
        [ "Label", "goalcharts_page.html#label_block", null ],
        [ "Jump", "goalcharts_page.html#jump_block", null ]
      ] ]
    ] ],
    [ "Interfaces", "interfaces_page.html", "interfaces_page" ],
    [ "Ontology", "ontology_page.html", [
      [ "Introduction", "ontology_page.html#ontology_introduction", null ],
      [ "How to Read the CMAS Ontology", "ontology_page.html#autotoc_md138", null ],
      [ "cmas.ontology Objects", "ontology_page.html#autotoc_md139", [
        [ "Entity", "ontology_page.html#entity", null ],
        [ "Note", "ontology_page.html#note", null ],
        [ "Settings", "ontology_page.html#settings", null ],
        [ "Folder", "ontology_page.html#folder", null ]
      ] ],
      [ "cmas.ontology.processplans", "ontology_page.html#autotoc_md144", [
        [ "ProcessPlanGoals", "ontology_page.html#processplangoals", null ],
        [ "ProcessPlanStructuredText", "ontology_page.html#processplanstructuredtext", null ],
        [ "Hazard", "ontology_page.html#hazard", null ],
        [ "Risk", "ontology_page.html#risk", null ]
      ] ],
      [ "cmas.ontology.agent", "ontology_page.html#autotoc_md150", [
        [ "AgentAction", "ontology_page.html#agentaction", null ],
        [ "Resource", "ontology_page.html#resource", null ],
        [ "Material", "ontology_page.html#material", null ],
        [ "Part", "ontology_page.html#part", null ],
        [ "DeploymentAgent", "ontology_page.html#deploymentagent", null ]
      ] ],
      [ "cmas.ontology.variables", "ontology_page.html#autotoc_md157", [
        [ "Variable", "ontology_page.html#variable", null ],
        [ "Value", "ontology_page.html#value", null ],
        [ "VariableBoolean", "ontology_page.html#variableboolean", null ],
        [ "VariableInteger", "ontology_page.html#variableinteger", null ],
        [ "VariableReal", "ontology_page.html#variablereal", null ],
        [ "VariableString", "ontology_page.html#variablestring", null ],
        [ "VariableArray", "ontology_page.html#variablearray", null ],
        [ "VariableObject", "ontology_page.html#variableobject", null ]
      ] ],
      [ "cmas.ontology.interfaces", "ontology_page.html#autotoc_md166", [
        [ "InterfaceBase", "ontology_page.html#interfacebase", null ],
        [ "Interface", "ontology_page.html#interface", [
          [ "Goal", "ontology_page.html#goal", null ]
        ] ],
        [ "InterfaceSpecialisation", "ontology_page.html#interfacespecialisation", null ],
        [ "InterfaceSpecialisation templates", "ontology_page.html#autotoc_md171", null ]
      ] ],
      [ "cmas.ontology.workflow", "ontology_page.html#autotoc_md173", [
        [ "WorkFlow", "ontology_page.html#workflow", null ],
        [ "WorkFlowLog", "ontology_page.html#workflowlog", null ],
        [ "Requirement", "ontology_page.html#requirement", null ]
      ] ],
      [ "cmas.ontology.batch", "ontology_page.html#autotoc_md177", [
        [ "Batch", "ontology_page.html#batch", null ],
        [ "BatchItem", "ontology_page.html#batchitem", null ]
      ] ],
      [ "Extended Ontology", "ontology_page.html#autotoc_md180", null ]
    ] ],
    [ "Planner", "planner_page.html", [
      [ "Introduction", "planner_page.html#autotoc_md181", [
        [ "Executing the Plan", "planner_page.html#planner_steps", null ]
      ] ],
      [ "Example 1 - one robot", "planner_page.html#autotoc_md182", [
        [ "Machine", "planner_page.html#autotoc_md183", null ],
        [ "Buffer", "planner_page.html#autotoc_md184", null ],
        [ "Robot", "planner_page.html#autotoc_md185", null ],
        [ "Part", "planner_page.html#autotoc_md186", null ]
      ] ],
      [ "Example 2 - adding an operator", "planner_page.html#autotoc_md187", [
        [ "Updated robot", "planner_page.html#autotoc_md188", null ],
        [ "Running Example 2", "planner_page.html#autotoc_md189", null ]
      ] ],
      [ "Goal-Driven Planning", "planner_page.html#autotoc_md190", [
        [ "Skill Requirements: AND / OR Semantics", "planner_page.html#autotoc_md191", null ],
        [ "Representing Skill Requirements in Structured Text", "planner_page.html#autotoc_md192", null ]
      ] ]
    ] ],
    [ "Processplans", "processplans_main_page.html", "processplans_main_page" ],
    [ "Requirements", "requirements_page.html", [
      [ "Introduction", "requirements_page.html#requirements_introduction", null ],
      [ "Example requirement on a skill", "requirements_page.html#autotoc_md199", [
        [ "Model", "requirements_page.html#autotoc_md200", null ],
        [ "Step-by-step instructions:", "requirements_page.html#autotoc_md201", [
          [ "1. Buffer", "requirements_page.html#autotoc_md202", null ],
          [ "2. Machine", "requirements_page.html#autotoc_md203", null ],
          [ "3. Robot", "requirements_page.html#autotoc_md204", null ],
          [ "4. ProductA", "requirements_page.html#autotoc_md205", null ],
          [ "Run", "requirements_page.html#autotoc_md206", null ]
        ] ]
      ] ],
      [ "Example requirements in a process plan", "requirements_page.html#requirements_assembly", [
        [ "Assembly", "requirements_page.html#autotoc_md207", null ]
      ] ],
      [ "InterfaceSpecialisation", "requirements_page.html#autotoc_md208", [
        [ "InterfaceLocation", "requirements_page.html#autotoc_md209", null ],
        [ "InterfaceTransport", "requirements_page.html#autotoc_md210", null ],
        [ "InterfaceAssembly", "requirements_page.html#autotoc_md211", null ]
      ] ]
    ] ],
    [ "Structured text", "structuredtext_page.html", [
      [ "Introduction", "structuredtext_page.html#structured_text", null ],
      [ "The overall structure in a program", "structuredtext_page.html#autotoc_md212", [
        [ "Program", "structuredtext_page.html#program", null ],
        [ "Directives", "structuredtext_page.html#directives", [
          [ "Include", "structuredtext_page.html#include", null ],
          [ "Use", "structuredtext_page.html#use", null ],
          [ "Error", "structuredtext_page.html#error2", null ]
        ] ],
        [ "Struct type", "structuredtext_page.html#struct", [
          [ "Asynchronous functions", "structuredtext_page.html#autotoc_md213", [
            [ "_book", "structuredtext_page.html#_book", null ],
            [ "_unbook", "structuredtext_page.html#_unbook", null ],
            [ "_isbookedbyme", "structuredtext_page.html#__isbookedbyme", null ],
            [ "_isbooked", "structuredtext_page.html#__isbooked", null ]
          ] ],
          [ "Static functions", "structuredtext_page.html#autotoc_md214", [
            [ "negotiateandbook", "structuredtext_page.html#negotiateandbook", null ],
            [ "agree", "structuredtext_page.html#agree", null ],
            [ "agreeandbook", "structuredtext_page.html#agreeandbook", null ]
          ] ],
          [ "Abstract interface declarations", "structuredtext_page.html#abstract", null ],
          [ "Define interface declaration", "structuredtext_page.html#define", null ],
          [ "Static interface declarations", "structuredtext_page.html#static", null ]
        ] ],
        [ "Global variable declarations", "structuredtext_page.html#var", null ],
        [ "Arrays", "structuredtext_page.html#array", null ],
        [ "Comment", "structuredtext_page.html#comment", null ],
        [ "Function declaration", "structuredtext_page.html#function", null ],
        [ "Procedure declaration", "structuredtext_page.html#procedure", null ],
        [ "Overriding ontology functions and procedures", "structuredtext_page.html#override", null ],
        [ "Main program block", "structuredtext_page.html#begin", null ]
      ] ],
      [ "Control structures", "structuredtext_page.html#autotoc_md215", [
        [ "while", "structuredtext_page.html#while", null ],
        [ "repeat", "structuredtext_page.html#repeat", null ],
        [ "for", "structuredtext_page.html#for", null ],
        [ "foreach", "structuredtext_page.html#foreach", null ],
        [ "if else if else", "structuredtext_page.html#if", null ],
        [ "case", "structuredtext_page.html#case", null ],
        [ "exit", "structuredtext_page.html#exit", null ],
        [ "break", "structuredtext_page.html#break", null ],
        [ "error", "structuredtext_page.html#error", null ],
        [ "label", "structuredtext_page.html#label", null ],
        [ "parallel", "structuredtext_page.html#parallel", null ]
      ] ],
      [ "Operators", "structuredtext_page.html#autotoc_md216", [
        [ "Arithmetic", "structuredtext_page.html#autotoc_md217", null ],
        [ "Assignment", "structuredtext_page.html#autotoc_md218", null ],
        [ "Relations", "structuredtext_page.html#autotoc_md219", null ],
        [ "Logical", "structuredtext_page.html#autotoc_md220", null ],
        [ "Object", "structuredtext_page.html#autotoc_md222", null ],
        [ "Array", "structuredtext_page.html#autotoc_md223", null ]
      ] ],
      [ "Types", "structuredtext_page.html#autotoc_md224", [
        [ "Real", "structuredtext_page.html#real", null ],
        [ "Integer", "structuredtext_page.html#integer", null ],
        [ "Boolean", "structuredtext_page.html#boolean", null ],
        [ "String", "structuredtext_page.html#string", null ],
        [ "Struct", "structuredtext_page.html#typestruct", null ],
        [ "Objects", "structuredtext_page.html#objects", [
          [ "this", "structuredtext_page.html#this", null ],
          [ "agent", "structuredtext_page.html#agent", null ],
          [ "interface", "structuredtext_page.html#interface_item", null ],
          [ "remoteinterface", "structuredtext_page.html#remoteinterface", null ]
        ] ],
        [ "Reference", "structuredtext_page.html#reference", null ]
      ] ],
      [ "Procedures", "structuredtext_page.html#autotoc_md225", [
        [ "Input and output", "structuredtext_page.html#autotoc_md226", [
          [ "writeln", "structuredtext_page.html#writeln", null ],
          [ "write", "structuredtext_page.html#write", null ],
          [ "readln", "structuredtext_page.html#readln", null ]
        ] ],
        [ "Abstract Interface Functions", "structuredtext_page.html#autotoc_md227", [
          [ "abstractname", "structuredtext_page.html#abstractname", null ],
          [ "abstractcost", "structuredtext_page.html#abstractcost", null ],
          [ "abstractshare", "structuredtext_page.html#abstractshare", null ],
          [ "abstractfind", "structuredtext_page.html#abstractfind", null ],
          [ "ignorebooked", "structuredtext_page.html#ignorebooked", null ],
          [ "ignorebusy", "structuredtext_page.html#ignorebusy", null ]
        ] ],
        [ "Test Functions", "structuredtext_page.html#autotoc_md228", [
          [ "isreal", "structuredtext_page.html#isreal", null ],
          [ "isboolean", "structuredtext_page.html#isboolean", null ],
          [ "isinteger", "structuredtext_page.html#isinteger", null ],
          [ "isstring", "structuredtext_page.html#isstring", null ],
          [ "stringisreal", "structuredtext_page.html#stringisreal", null ],
          [ "stringisinteger", "structuredtext_page.html#stringisinteger", null ],
          [ "stringisboolean", "structuredtext_page.html#stringisboolean", null ],
          [ "stringisempty", "structuredtext_page.html#stringisempty", null ]
        ] ],
        [ "Converting Functions", "structuredtext_page.html#autotoc_md229", [
          [ "realtoint", "structuredtext_page.html#realtoint", null ],
          [ "inttoint", "structuredtext_page.html#inttoint", null ],
          [ "booleantoint", "structuredtext_page.html#booleantoint", null ],
          [ "stringtoint", "structuredtext_page.html#stringtoint", null ],
          [ "realtoreal", "structuredtext_page.html#realtoreal", null ],
          [ "inttoreal", "structuredtext_page.html#inttoreal", null ],
          [ "booleantoreal", "structuredtext_page.html#booleantoreal", null ],
          [ "stringtoreal", "structuredtext_page.html#stringtoreal", null ],
          [ "realtoboolean", "structuredtext_page.html#realtoboolean", null ],
          [ "inttoboolean", "structuredtext_page.html#inttoboolean", null ],
          [ "booleantoboolean", "structuredtext_page.html#booleantoboolean", null ],
          [ "stringtoboolean", "structuredtext_page.html#stringtoboolean", null ],
          [ "realtostring", "structuredtext_page.html#realtostring", null ],
          [ "inttostring", "structuredtext_page.html#inttostring", null ],
          [ "booleantostring", "structuredtext_page.html#booleantostring", null ],
          [ "stringtostring", "structuredtext_page.html#stringtostring", null ]
        ] ],
        [ "String Functions", "structuredtext_page.html#autotoc_md230", [
          [ "len", "structuredtext_page.html#len", null ],
          [ "left", "structuredtext_page.html#left", null ],
          [ "right", "structuredtext_page.html#right", null ],
          [ "mid", "structuredtext_page.html#mid", null ],
          [ "trim", "structuredtext_page.html#trim", null ],
          [ "replace", "structuredtext_page.html#replace", null ],
          [ "contains", "structuredtext_page.html#contains", null ],
          [ "tolowercase", "structuredtext_page.html#tolowercase", null ],
          [ "touppercase", "structuredtext_page.html#touppercase", null ],
          [ "split", "structuredtext_page.html#split", null ],
          [ "tostring", "structuredtext_page.html#tostring", null ],
          [ "chr", "structuredtext_page.html#chr", null ],
          [ "ord", "structuredtext_page.html#ord", null ],
          [ "space", "structuredtext_page.html#space", null ]
        ] ],
        [ "JSON functions", "structuredtext_page.html#autotoc_md231", [
          [ "GetJElement", "structuredtext_page.html#getjelement", null ],
          [ "SetJElement", "structuredtext_page.html#setjelement", null ],
          [ "JToStruct", "structuredtext_page.html#jtostruct", null ],
          [ "StructToJ", "structuredtext_page.html#structtoj", null ],
          [ "GetJArray", "structuredtext_page.html#getjarray", null ],
          [ "IsJson", "structuredtext_page.html#isjson", null ],
          [ "IsJsonArray", "structuredtext_page.html#isjsonarray", null ],
          [ "JsonWrite", "structuredtext_page.html#jsonwrite", null ]
        ] ],
        [ "Math functions", "structuredtext_page.html#autotoc_md232", [
          [ "abs", "structuredtext_page.html#abs", null ],
          [ "ceil", "structuredtext_page.html#ceil", null ],
          [ "floor", "structuredtext_page.html#floor", null ],
          [ "round", "structuredtext_page.html#round", null ],
          [ "max", "structuredtext_page.html#max", null ],
          [ "min", "structuredtext_page.html#min", null ],
          [ "exp", "structuredtext_page.html#exp", null ],
          [ "log", "structuredtext_page.html#log", null ],
          [ "log10", "structuredtext_page.html#log10", null ],
          [ "sqrt", "structuredtext_page.html#sqrt", null ],
          [ "sin", "structuredtext_page.html#sin", null ],
          [ "cos", "structuredtext_page.html#cos", null ],
          [ "tan", "structuredtext_page.html#tan", null ],
          [ "asin", "structuredtext_page.html#asin", null ],
          [ "acos", "structuredtext_page.html#acos", null ],
          [ "atan", "structuredtext_page.html#atan", null ],
          [ "sinh", "structuredtext_page.html#sinh", null ],
          [ "cosh", "structuredtext_page.html#cosh", null ],
          [ "tanh", "structuredtext_page.html#tanh", null ],
          [ "todegrees", "structuredtext_page.html#todegrees", null ],
          [ "toradians", "structuredtext_page.html#toradians", null ],
          [ "random", "structuredtext_page.html#random", null ]
        ] ],
        [ "Array Functions", "structuredtext_page.html#autotoc_md233", [
          [ "length", "structuredtext_page.html#length", null ],
          [ "startindex", "structuredtext_page.html#startindex", null ],
          [ "endindex", "structuredtext_page.html#endindex", null ]
        ] ],
        [ "HMI", "structuredtext_page.html#autotoc_md234", [
          [ "messagebox", "structuredtext_page.html#messagebox", null ],
          [ "inputdialog", "structuredtext_page.html#inputdialog", null ],
          [ "optiondialog", "structuredtext_page.html#optiondialog", null ]
        ] ]
      ] ],
      [ "System Functions", "structuredtext_page.html#autotoc_md235", [
        [ "Time", "structuredtext_page.html#autotoc_md236", [
          [ "sleep", "structuredtext_page.html#sleep", null ],
          [ "time", "structuredtext_page.html#time", null ],
          [ "beep", "structuredtext_page.html#beep", null ],
          [ "memoryfree", "structuredtext_page.html#memoryfree", null ],
          [ "memorytotal", "structuredtext_page.html#memorytotal", null ],
          [ "memoryused", "structuredtext_page.html#memoryused", null ]
        ] ],
        [ "Preferences", "structuredtext_page.html#autotoc_md237", [
          [ "preferencevalue", "structuredtext_page.html#preferencevalue", null ]
        ] ],
        [ "Debug", "structuredtext_page.html#autotoc_md238", [
          [ "threadmessage", "structuredtext_page.html#threadmessage", null ]
        ] ],
        [ "File Functions", "structuredtext_page.html#autotoc_md239", [
          [ "open", "structuredtext_page.html#open", null ],
          [ "MODE", "structuredtext_page.html#mode", null ],
          [ "close", "structuredtext_page.html#close", null ],
          [ "fwriteln", "structuredtext_page.html#fwriteln", null ],
          [ "freadln", "structuredtext_page.html#freadln", null ]
        ] ]
      ] ],
      [ "Server API Functions", "structuredtext_page.html#autotoc_md240", [
        [ "Pause", "structuredtext_page.html#autotoc_md241", [
          [ "pauseAll", "structuredtext_page.html#pauseall", null ],
          [ "pausebyname", "structuredtext_page.html#pausebyname", null ]
        ] ],
        [ "Console and log", "structuredtext_page.html#autotoc_md242", [
          [ "clearconsole", "structuredtext_page.html#clearconsole", null ],
          [ "clearlog", "structuredtext_page.html#clearlog", null ]
        ] ],
        [ "Runtime control", "structuredtext_page.html#autotoc_md243", [
          [ "isruntime", "structuredtext_page.html#isruntime", null ],
          [ "stopsystem", "structuredtext_page.html#stopsystem", null ],
          [ "restartsystem", "structuredtext_page.html#restartsystem", null ],
          [ "getagentsbyname", "structuredtext_page.html#getagentsbyname", null ],
          [ "getagentsbyid", "structuredtext_page.html#getagentsbyid", null ],
          [ "deployandattach", "structuredtext_page.html#deployandattach", null ],
          [ "deploybyname", "structuredtext_page.html#deploybyname", null ],
          [ "deployall", "structuredtext_page.html#deployall", null ],
          [ "undeploybyname", "structuredtext_page.html#undeploybyname", null ],
          [ "undeploybyid", "structuredtext_page.html#undeploybyid", null ],
          [ "undeploybyinstanceid", "structuredtext_page.html#undeploybyinstanceid", null ],
          [ "undeployall", "structuredtext_page.html#undeployall", null ],
          [ "getnumberofrunningparts", "structuredtext_page.html#getnumberofrunningparts", null ],
          [ "getnumberofrunningresources", "structuredtext_page.html#getnumberofrunningresources", null ],
          [ "attach", "structuredtext_page.html#attach", null ],
          [ "assembly", "structuredtext_page.html#assembly", null ],
          [ "getmodelstates", "structuredtext_page.html#getmodelstates", null ]
        ] ],
        [ "Object access", "structuredtext_page.html#autotoc_md244", [
          [ "getobject", "structuredtext_page.html#getobject", null ],
          [ "getrelation", "structuredtext_page.html#getrelation", null ],
          [ "getreference", "structuredtext_page.html#getreference", null ]
        ] ]
      ] ],
      [ "Examples", "structuredtext_page.html#autotoc_md245", [
        [ "Example 1 - Arrays", "structuredtext_page.html#autotoc_md246", null ],
        [ "Example 2 - Interfaces and objects", "structuredtext_page.html#autotoc_md247", null ],
        [ "Example 3 - Structures", "structuredtext_page.html#autotoc_md248", null ],
        [ "Example 4 - MessageBox User Information", "structuredtext_page.html#autotoc_md249", null ],
        [ "Example 5 - InputDialog", "structuredtext_page.html#autotoc_md250", null ],
        [ "Example 6 - OptionDialog", "structuredtext_page.html#autotoc_md251", null ],
        [ "Example 7 - JSON Get", "structuredtext_page.html#autotoc_md252", null ],
        [ "Example 8 - JSON and Struct mapping", "structuredtext_page.html#autotoc_md253", null ],
        [ "Example 9 - JSON Set", "structuredtext_page.html#autotoc_md254", null ],
        [ "Example 10 - Sort", "structuredtext_page.html#autotoc_md255", null ],
        [ "Example 11 - Foreach", "structuredtext_page.html#autotoc_md256", null ]
      ] ],
      [ "System include files", "structuredtext_page.html#system_include_files", [
        [ "ontology.inc", "structuredtext_page.html#ontology_inc", null ],
        [ "file.inc", "structuredtext_page.html#file_inc", null ],
        [ "messagebox.inc", "structuredtext_page.html#messagebox_inc", null ],
        [ "queue.inc", "structuredtext_page.html#queue_inc", null ]
      ] ]
    ] ],
    [ "Variables", "variable_page.html", "variable_page" ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Functions", "functions_func.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"1_howtouse_page.html",
"classcmas_1_1ontology_1_1agents_1_1_part.html#a03ca0ee81469bb6737ee994cbeb4c7ea",
"classcmas_1_1ontology_1_1interfaces_1_1_interface_specialisation.html#aa8c936de9e879d7f6c9fc0e2e8ce9f2e",
"classcmas_1_1ontology_1_1variables_1_1_variable_array.html#a883ab187281f486e3c72561e18557b06",
"deployment_page.html#autotoc_md37",
"structuredtext_page.html#abstractname"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';