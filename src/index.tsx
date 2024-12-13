

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'Mt';

          let args: any = [];

          const screens = [
            
        
        
        () => <>{/*styles library*/}</>, 
        
        
        () => <>{/*elements library*/}</>, 
        
        
        () => <>{/*functions library*/}</>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"sc2",

          styles:[
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primaryColor"
        }})
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

          screenElements:[
        (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
              {
                backgroundColor: 'blue',
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }
              ],

          childrenItems: [()=><></>],

          pressableFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("sc1");
        }
        ],

          args,
        }}/>, (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
              {
                backgroundColor: 'blue',
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }
              ],

          childrenItems: [(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "where"
        }})
          ],

          args,

        }}/>],

          pressableFunctions: [async (...args) =>
        functions.firebase.where({ args, pass:{
            fbInit: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.fbInit"
        }})
        }})],
            arrRefStrings: [jsvals.j8({pass: {
          propertieValues: "users"
        }})],
            arrWhere: [(...args) =>
        functions.firebase.whereConds({ args, pass:{
          arrStrings: [
        jsvals.j8({pass: {
          propertieValues: "userEmail"
        }}), 
        jsvals.j8({pass: {
          propertieValues: "=="
        }}), jsvals.j8({pass: {
          propertieValues: "sdd"
        }})],
        }})],
            arrFuncs: [() => {}],
        }})],

          args,
        }}/>],

          startFunctions:[async (...args) =>
        functions.firebase.fireInit({ args, pass:{
          fbConfig: jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.fbConfig"
        }})
        }}),
          arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [jsvals.j8({pass: {
          propertieValues: "all.fbInit"
        }})],
          value: jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0"
        }}),
          args
        }})
        }})]
        }})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"sc1",

          styles:[
        
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#F3F3F3"
        }})] }})],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "250px"
        }})] }}), 
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
        stls.position({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "absolute"
        }})] }}), stls.zIndex({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "0"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
    
stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.zIndex({ pass: { arrayValue: ['1'] }})],

      URIvariablePath:[jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/longBar.png?alt=media&token=ad4b584a-4b57-440e-9f84-d57c6e794d02"
        }})],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "30px"
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "space-between"
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), 
stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }}), stls.paddingHorizontal({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.20"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), 
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[(...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
        
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 10" {...props} ><Path {...props} d="M0 1.5A1.5 1.5 0 0 1 1.5 0h18a1.5 1.5 0 0 1 0 3h-18A1.5 1.5 0 0 1 0 1.5ZM0 8.5A1.5 1.5 0 0 1 1.5 7h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 0 8.5Z" /></Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})],

      args,
    }}/>],

          pressableFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [jsvals.j8({pass: {
          propertieValues: "all.toggles.sideMenu"
        }})],
          value: jsvals.j8({pass: {
          propertieValues: "show"
        }})
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "70px"
        }})] }})],

      URIvariablePath:[jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/logo_poupi.png?alt=media&token=86a41293-886c-4d0c-bf9c-b2d515f26edd"
        }})],

      args,
    }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "170px"
        }})] }}), stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.20"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.20"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "170px"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }}), stls.flex({ pass: { arrayValue: ['1'] }})],

      URIvariablePath:[jsvals.j8({pass: {
          propertieValues: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUPEBAVFRAQDxAVEBcSFRUQFRAVFRUWFhUVFRUYHyggGBolGxUVITEhJSkrMC4uGCAzODMsNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EAEgQAAIBAgMEBwUDCAcIAwAAAAECAAMRBBIhBTFBUQYTYXGBkaEiMkKxwVKS0QcUI2JygsLwM0NTstLh8RVEVGODk6LiJGRz/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EADMRAAIBAgQDBAoCAwEAAAAAAAABAgMRBBIhMRNBUQVxkaEUIjJCUmGBsdHwweEVI/Ez/9oADAMBAAIRAxEAPwD61eAF4ArwBXgBeAK8ALwBXgBeAK8AV4AXgCvAC8AV4ArwAvAFeAF4ArwBXgBmgCvAFeAGaALNAC8AWaALNADNAFmgCzQAzQBZoAs0AC0AWaALNADNAFmgHVvAFeAK8ALwBXgBeAK8AV4AXgCvAC8AV4ArwAvAFmgCvADNAFmgBeAK8AWaAGaALNAFmgBmgCzQBZoAZoAs0AWaAGaALNAFmgCzQAzQBZoAs0AM0AWaALNAOteAK8AV4AXgCvAC8AV4ArwAvAFeAK8ALwBZoAXgCvAFmgBmgCvAFmgBmgCzQBZoAZoAs0AWaAGaALNAFmgBmgCzQBZoAs0AM0AWaALNADNAFmgCzQAzQBZoB1rwBXgCvADNAFeAF4ArwBZoAZoArwBZoAZoAs0AV4AZoAs0AWaAF4As0AWaAGaALNAFmgCzQAzQBZoAs0AM0AWaALNADNAFmgCzQAzQBZoAs0AWaAGaALNAFmgHXzQBZoAs0AM0AWaALNAFmgBmgCzQAzQBZoAs0AqxGKSmL1HVBzdgo9ZKTexDaW5ycT0twNPfiAx/5Yap6qCJvHC1pbRf2MZYmlHeSOTivyhYZdEpVX7Tkpj1a/pNV2fV52X1MnjaXK7+hy6/5R6p/o8InZmq5vQKPnNV2dJ+8ijx8ehzMR+UPaPw0aKjsVm9c8t/j7bsLG32scjEflHx5/3mmv7CUz8wZk6NCO8vM04lV7LyML/lBx3/ABr+CKP4BKtYZfrJ/wB/7YqP5Q8b/wAVV8k/CUcqHJP9+pbLW6okv5RseN2Jf95af+AyjnS5R8yyjU+LyNuG/KjtAb2pv+0i/wAIErmh8Pn/AEWyz+Ly/s7+zfysg2GIw1ubUm/hb8ZFoPm15/vgLzXK/l++J67ZXTLA4mwSuFY29mp+jPdrofAxwpcte79uOIuenf8AtjuhuPCZmgZoAs0AWaALNADNAFmgCzQAzQBFoAs0ALwBZoAs0AM0AV4B1s0AM0AWaALNAFmgBmgCzQBZoAXgHM2jt/DYfSpVGYfCvtv4qu7xtNqeHqVPZRlUr06ftM8jtX8piLcUaYvwNQ5j9xP8U39Gpw/9Z/RamHpFSf8A5wfe9EeT2j05xtbdUdVPBSKIHgmpH7xji0IexC/f+Bwq0vanbu/J5rH7Tre8WGZr3I1PiTr6yJY2raysu5FlhKe8rvvZlpVWcEszG1tMxt5XmDq1JbyfibKlCO0V4EDTX7ImZpcQUD4ReStNiHqb8PVrqLjPl5MC49dfKdNPF1YbO/fqctTDUp7q3doXH83r6VkyOfjU2BP7X0Yd06lOhidJLLL9/dTDLXoax9aPmYNodHa1MF0/SUwLkqPaUc2TeB2i47Zy18HUpfNHTRxVOrtuc/BZQ46wXU6d19xnLY3le2hpfY9W+pXwv+EWI4iGuzsu/U+QixDmVtQtuP1gKQgWEFro7Ox+lOMwptSrMFHwN7S/dM04jfta9/53K5F7und+Nj3mxvyoI1lxVLKftU9R4qfxjLCWzt3/AJ/ojNOO6v3fj+z2+ztr4fEi9Gqr6bgfaHep1lZQlHdF4zjLY2ZpQsLNAFmgBeAK8AV4AZoArwBXgBeAK8ALwBXgHWzQBZoAs0AM0AWaALNADNAOPtvpJQwoIZs1QfApFx+0Tovjr2GdFLDTqK+y6vYwq4iFPR6votz53tvpricR7KEpTJAsl0XU21b3m7d3dNs9Cl7KzPq9vAxy16vtPKui38eRwKmHdveJI5DRfIb++ZVMRVqe09OmyNaeHpU9Uter1ZV+ZNwWYG90RbAtxFu8wRdHJ2hTs1uwfOQyxPAUrhhyI9b/AIQgdGhsosLk2B3c5JVs1YTCKB7oDKbNzvz7jBSRpFK0tGMpbK5SUktzLjcE7uOrS+ntEC1yeB5/5zdYSs/dM1iqUd5Fa1a+EYAqypoVvcAc8rD3fC47Bvm1PEVsP6s1ddH/AAzOph6WIWaDs+q/lGurgcJjhm/o6xFyyAa341KYNmv9tSP3p0vDUcSs1J2fQ5lia2GeWsrrqV0sFUoJkxIGRbCnWBvScfZL/C36rWPZPNq0Z0naSsd0akKqzQdyNXDra9xbs1mRY4lVGqMer0UcSCS3cOUsqc3sn4E54R3fmVrg650yDvLADy3zRYWq+RV16S5lybJrHQlbdgLTaOBqPf8AkyeMprb+DRT2E3Et4Laars582/AzfaC5JeJuwmy3pkMnWAjcQSD6TeGBy7XMZ43Nukehp7Y2iAF6+pYbrqrHxYrc+ct/j4N3aKenzWiYHauPO+vV8Bb5CXXZ9LoVePqfF9iB2hi+Nev99xNFgqPwmbxtV+8IY6vxr1v+6/4y6wlH4UUeJrfE/wB+pauNq/2tX/uMZb0Sj8K8inpdb4vv+S5cfW/tqv3ifrJ9Do/D5Eem1/iLV2liBurv4kyrwNB+6SsfXXvFybaxQ/rCe8A/OZS7NovZGse1Kq3NVLpTWX30Vh90/wA+E5anZfws66fat/aR0sD0noVDla9Njuz+6f3hoPG04auCq09bXXyO2ljaVTS9n8ztZpyHWLNAFmgHVzQAzQBZoAs0AM0ApxOKSmpeowVF3k6D/XsloxcnaKuyspKKu3ZHh9vdMHe9PD3VTcXH9I3b+oPXtE7eFToa1PWl8PJd5x8WpiNKWkfi69y/k85g9mGqQ1Q30zW4C/zOu+c9WvOr7T06cjopUIUl6u/XmzRjcGFakLf1hJA4WRiB8pkXLvzcHdBUoq0MvCAZKuFZvw5QWWhw9p4I5zpuCyGXRZsvBHOy/aS/3T/7CEGejwWCYrltqPlLGTJVMDkYMSADo19O4wQef29iKtKoDSZGQqNzKSDyyhr9t+2dNLF1accsLGU8NTm800Qw3SDEqLdUTbiqg/NT850rFYhrWN/H8mDw2Hv7VvAqx+16lcdWaVS+YHQqLW8ABylalWtWjkylqdGjRlxFI07O2Fiqvt0aLhgd+ZW1/dGn1433SsMJXg1L2X3k1MXQmnGzku49dsnBbQpe8FRzpfOoDC17MrW5d3dPVhUzRtWs+6/40PHnTyyzUbrvsv51+puOzqhNy2EQ88tE+YVTLZoLZS8ytqj3cfL8EatPKPaxNH/p0kP8Ikp391+IbtvNeH9GR2T+2v3Ap8kMuov4f3xIdRfF++BWcn9ox8z9BLZZdCvEjzkytyvAnyP+OWUX+/8ACjqx+f79SrM3Z5fjLZSnEHg2q1Lg1MNSsSB19VaIbkVYrY+c8+ti5UpNSpu3W+n2PSo4WNaKcKiv0tr9zamydoN/R0qVYf8A169Gv6LrMl2pD4X4mj7Mn8S8CpcNig2R6DI3KoUpnyZgfSbR7Sove6+n4uYT7LrcrP8AfoZ62MSmStRkBU2ILKJ1RxVGW00ccsHWi9YMSY/Cn+tp6/rIfkZbjQ+JeKK+j1OcZL6Mk+Jo8KqW55h6DfJVaL5oh4eaV9X9DDX2zh1JGe5HBR9T+M56naGHi7Zr9yOin2diZK+W3e/37GKr0kojcpPLMy6+RM5pdq0lsm/3vOmPZFbnJL97jI/SdrexTUcvebuvcLMJdrS92HmdEex4+9Nv6f8ASvE43GFc7U8q5b39hARa+lyxOms5p9pVpO10u7+7nXDsyjFXs33v8WPc/k32z1+GNJ2Jq0XIIJv7B1W2m7h/NhySTazvm9e86otReRdNO49bmmZoLNAOtmgCzQBZoAXgGDam1Uw419pz7qDee08h2zow+GnWfq7dTmxGKp0I3lv05nidpti8WDVZWyqD1aWZQO3dp8zxsNJ1ybpJwoRfzlzfcc0Yqq1Ou+6PJd/U5OGq0mBRRlqAXZW97vH2l5Ead26ecz0kep2PhAEF7D9Gm/ThBEjPtAUBVpBqqCxqFvaBy+zYXA3b4SbehVtJaifE4Jf61mP6lNz5EgD1m0cPVltFmEsTRjvJeJkq7Vww92hUbtYogPqT6TaOArPlb6mTx9Bc7/QoO12b+jwq+LNU+SiaLs6fvSSM/wDIQfsxb/fqYMRhMTVJJS2fTSnl4W0LE8BLrAQW8/L/AKR6dU5Q8/8Ag6ex64ObMwIBF7otgbX90dgmkcHQXNszljMQ+SX73lqbFqNqahPfUdvS9pqqGHj7pm69d+8W0+jCXubX55AT5mWtSjtBFb1XvJm6j0ZT9bwsPpJdW2wVLqbV2DSX3tO9rTNycjVRUSVHZ+Cp73pk83dXPqdJePE5JlJOD9plxqYIaZ6duW8ektar0Zn/AKuqGr4QkZKlMEHXcmljxPhDVTmmFwuTRrbB0nF0JftBQD0LTLiVU7NJeP8ARpwaTW7fdb+zk4vZjcp2QrI4KtB8jA2DcfCZuqkWcrpzXIz1HC6E68t5l7lFGT5FZxI5GSX4bDr1/wBYuMjGZBBjrbHpVDm6qzggh6f6N1I3EMvHvvOSthaM91r1Wh10cZWp7O66bnvG6SJiMNTo46j1lajbq6pyLntp+kVxlva17XuRew3TzXgJRfqO6PTp9oQmvXVn+9bHZp9NMIFGbDIHXdapQcaCw4g7pn6FW5fydHplL9scvaXSnBszV6NFUxLKgLFUqIwBFwRlNtBvE3hga1sstUc88ZRvdaPuujx/Syv/ALSxArYhk6ulfqaaA/Fa+dsik7h5d80o9m2lepsZVu0PV/1vU8ttfYyr+koqABrUHd8QPzGszxuAUVnpLTmvwa4HtByfDq78n+TjADhx8Sf9PHQzxz2CNVbeOv037zv9N8A6FHahGHallF1XKCWIuHvvS28X5jhIstyVJpWLOhm0Th8YhHuPdKncdx8/nOnDrO3T6/fl+Pqc2IeRKp0+3Py1+h9i6ycx0C6yAdnNADNAOJ0uxmIo4Y1cN7ysM+gLZTpdbgjeVvpuvAPF06eIxCrVr4qv7Sg5BVamo7CEIHlPawvZsZRU5u99bHz+N7XlGcqdNWs7X/B3Nn1cPQHus7clH4zvqU5WyxskcNGtG+ad5SZsfbVVjanhWtbTMcvzE5+DFbyO9YiT9mJyNobPqV2DVKFFWvcEklgeJuvHtlZUqL9pXLRq11s7GSrs+mp9uqLrvC02qlfmRJUKUdoIh8WW82aNl7Oo17ikztbeLGna/wCqQDLzqygtrFI4aEn1Ouej9CkM1XIg51Ht/eMx485aROhYWEdWZ2xuzqW51J/5dMn/AMrW9ZOWtLkT/pjsZ6nSjDD3adQ9+VfqZZYefNoh14ckZKvShT7uH4/E/wCCyyw76lOOuhw9oYo1bkU1JJJ/SVHIFydAoU/OaZJLYqqked0RwbtSYOmRWAPuLYa9517peMG1aVjOVRXum/qbjtTEHfVbwsvyEuqUOhm6supU2KqN71Rz3sx+ssoRXIzc5PmVy5UkDJKjzQBM3zHzhhIspVWU5lJBG4qbEeIhpPRkJtbHWw/SPEqLFlcfrqD6ixMweGpv5G0cVUW+pi6SdLytIAqqE3uKdw1Q9l/dHP8AkTnqunhlmk79EdNJVMT6sVbqzxIxWKxOobqqROmW4v3W1b5Tyq2OrVOdl8j1KWBo0+V38yQ2QhPtFiQdSzAHfv36cZyNt7s6kktET6irT1pV2twDHMp8DpNqeJqw9mTMp4elP2oo62xekjo+RwEdtBcZqbnx3GerQx0K3qVNH1PLr4GVL16eq+e56Zts4lFAKKLj2SUsT28jNcPLD4lOVKV7Oz+T6NPVfUyrwr4ZqNSNrq62d13rQ5W1NoYiopswzCxAygBra5Tpx3TepSag+HozCE4ymuLqjP0jxAprSxWHF8NXQMA2ppkWDKWtvF1v25x8M8yPaFWKu9Uej6BTd4rRmXAbXp1dx14jiPD8J6NDGwqrQ4a+DnT3OglQHcZ1pp7HI4tbkw8krY42O2GXYtRZVze8rAgX7CPwnkYjs3PLNTdvkerQ7S4cMtRN/NGU9Ha/26fm2np29/bOb/FVuq8/wdH+Wo9JeC/JJOjlT4qqD9m8suyqnOS8yr7Wp8ovyNVHA0cOM7MLjifZA7R2zenhKWH9aTu/A56mLrYj1Iqy8We82FtJa+HSorXFspOo1XQ7+6ePWcXUk47XPZoKSpxUt7G3rZkanos0AWaAeT6RdIB+cjZwYqzqpZgobfr7x0UabyPKa0OJxFwvaK1VQ4UnX9nw8yzAdFjSJqku5cWGZzVUDfuva/dPYw0pRbdSTbZ4ONpxmkqMEoru+5oam66BRbvt9J1NqRyQvHdEc5GpOvylHE6I1CL02IDsQqA6s5CjXTj4SjstDRXevI87tlcOfZXF4l1BYhKbdXSBJLEXYXIuTwMsqU5atW+5PGhFZd/395GCjtGpSDCgeqD+9kJztbddzr4Cw7JqqEfe17ynHly07jHULMczEkneSbk+JmiVtjNyvuIJJsRcYpybEZhlIsQmTyySLjAkkXHBA5JAXgBeSQO8ATHQ90h7BbliyxVkmawh6EJXZ4wA4zEMx9xfD2R7q9l/xny2IqutVcuXLuPqKFJUaaj+3PZ4rZL4bCDFlA3wspF/zdWtkaqmlwb6jgLXFz7ORqXdBekVdjXRyw/QsLjQLUBCrltoNKjm191MSNxsa1pYc7Nq4nG1TiKg6lKNRVWnUNRmdbBxc1VNr+1fRbiGibnjts7N6psrm9Nxem1rC3dwtpccPEErEXO/sLpIz4Ntm4hcz0XDUKh94LfVb8R+ImmDoVFjFXo2u9Ki+Jcpd659dPnfHFSpPDyhU0VvVe9n0+SfLp4EDPqz5ou2XRWtTxGAYXNvznDgb95FRAeBuzKBzxJPCeFiqWSrJcnr+fyezh6rlTjLmtH/AB+D59iUalUIzG6NoQw15MOwix8Z5usXpuelpKPyZ67ZtCoaYd3XMbbrg7hvBG/0nv4GU6kM0jwcZkp1MkVyuTxeOWmcpK3yk+0WCgDmVVj6cJricXGhZPVlMNhXWu72RzKO32c+wq3/AHj9BOF9qN7RO3/GR5tlOI23XuRdQQbaKT8zMJdpVntZfQ1j2bRXV/UyVNoV231W15ELbvyznli68t5M3jhaMdooy1QWvmJNgxuTc6Anj/PrMJNvVnRFKOiPpXRICngaIJtdCxvp7zFvrMy5vqbVoLo1amD+2v4y6pyfJlc0ep7S8oWC8A+dbYw99p4iqeCUEXxpoT8h5z2eyaWsqn0/P8HjdsVvUjSXW7+y/k04XG1aRvTqMvcdD3jcZ7E4Rn7SueHCpKDvF2NzdJq9vbCN2stj/wCJExeFgtro6Vi6j0dn9DzO0unShrKwvypIGHm2/wAJyTxeHp6Xcu79R208HXnrZLv/AFnPHSWnWb9I7hjxqj66gS1LH4eWm3eRVwNda79xtt/lO44xZYsLitIJuO0AIJFeAAMBheSQF4ICAEAckBABhoe4w9gty1DxlkyjOft2uVw7kHUgL94gH0nLjajjQk13eJ1YKmpVop/tijoDhEd1D5crVSz5iqqVpqWCsW0sxGXX7c+cS0PoJPU6GLwu0cJXasSHoVndsQ11qpWVvezpfWw5Hmbi8O4TXMr2VtTDUC4pZuoxAWmbtf8ANqpDIha/ABmGY+8ACNQVBNWGpz6tZ2w9DBU6bZqTXcKS36etoO4ZAijkWe28QD1mJ6P4uvg8TXrqBkBrKl7tT6sAFbXst0zexq1wCbaAGxY+d08QabpUG9DZrfEB/wCpt4TSlUdKamuRnUgqkHB8z2J5jcRcT6lNPU+a20M9fGPhqlLFp71GoM2/3H9lt3blPeBPP7Qh6imuX2eh3YGXruD5/danndvVab1TVAur6rlTKFHBLNwUWXj7s8N9T2o6aI9HgcP1dJUtqFF7Dex1NgO0z6ajBUaKT5LX7s+drTdWq2ub0/g8ztXEZ6rJ35jwzDcqnkLW7dZ85XqurUcme/RpKnBJHNo1SCCDqN1zceQmKNmdA0KlU5kpsSQMwA3HtPdabLD1ZezFmMq9OHtSRop7DxBF2UIOJdgvynRHs6s9ZWXeznl2hQWibfcjXg9k0desr5yVtlogud4vu8t4mnotKHtyv3GbxdafsQt3mvaOGoZRYlXRbKulRm/by6L5+chbpRjoTFu15PU5ooTfIVzn3PNPDPWFmgHitt1FOIqMOLAHtKqE/hn02Ap5KEfnr4/0fL9oVOJXl8tPD+zEGnbc4mjy/SnaDs4wtM2uB1luR3DutqfCeN2liXfhR+v4Pb7LwsbcWX0/Jo2bsILQNdvZpL1d8tmqsHJCtl3qhINm3abuM8ix7Fx/7LTE0DXoXyqyrkrWVixJACsDq1xu08YsLnM2VjjRfqnJ6pjYZt9JuXdf8ec9HA4p05ZJP1X5f0cGNwqqLPFesvM9GTPdPEACVF7EhTkXIzD6sSMwzB1YkZhmYggjMG2GWMxFwyxcDtJuAtFwEm4HFyBiSQQprdR2ADy3yI7FpOzMHSGl/wDGfsynyYTlxqvRf0+51YGf++P1+xy9iNegyjflqDne3tn0UzxIHt1HqT6PJUNdTYmkL9aKIy2upAu1OwU35kSNb6Eu1tTo4LErRqvVqulRaYYuulSwLg01qVFuGOlsoY668LyE7bktdC3GuBVrIMQ2E6xyytkdgyu7gUmNP2lKWym176i1hJZETr9E+h2KRjWXE4SrQpkGsQ7O+RAc6IQpynLcZGIOu4Su2hbfU+ctoLngQZZoqnqe02Ub0E/VGX7ug9LT6HByzUY+HgfPYuOWvL56jxlIOjJcDMpGvA8D5zWrBTg49StGbhNS6HnRsmopDNXoCxB16w9utkniLCVYu7a8T2vSaclZKX79To4na6qtiVcka9WXHkTa09GpioZLT1vukcNPCSz3jdW62MmzqGHqE5aFJLca9YjyFjecKnQjtS8X/wBOyUKz3q+CRdjq4w7BV/NySL2oKahHeTpJ9My+zFLuRX0XP7UpPvZWuNxLje+X9oUx5IAfWTx8RU2ZX0fDwe2vj9xphidXKk92Y/ee5hUZPWci3FSVoIlXwqvo7MRyzEL5CWeHpPf7kKtUWxetITqVmc7uWCjNFApmPrBqT5c+hEakA8J0kpMmJcgEq9mFu0a+oM+hwFRyor5aHhY6EY1X89TJQq856CZ504nmcNTFTGVWf3Q7g9yg6eIUDxnzWJeavJ/M+kw6y0IpdD02Iq4fEOcRSZlbqMmNw9MkiqhTL1lNeaj2ittClx24WZrczJTdsOMIrkdZtB6jum6nSp0aRvccCaunO4331m2ozaHF6RVadao1WmpUMbEE3Og0Y23Ejh63vDQTOjsTE9ZSBOrJ7Ldttx8rT38HW4lJX3WjPCxlLh1Wls9UdETp3ONkgeyMrIsSAPKMjI0DIZPDGZB1ZjhjMGTtEnIhmFl7YyxF/kIgfa+UWj1J16ES6De484vDqTln0IHE0h8Y84z0+pZU6j5C/O6X2h6mOJTJ4NToH57S7fIxxYDgVCyhUGUEDeL8t8pmuVqReZphik6ymyfaVh5i0pUWeDj1FKWSal0Z5Xo9iupq2Kg2YMFbcxU+0jDiCLg9hM+eWjsfSz1Skj1HSfFYyvUWhhmPUVQDhlpKKSsrHKFIWwBB9gjfcEaw1dFUznberKa1HCUwpWjWp06rKPYq1NBVax3qNUGm4MfiMrexdI7FDYj4g4mgVVsV1tSvh7XF2bM9SiCD7JITMvIrb4jLWsit7tdTLgqq0sGcSV/SLRehTcgo7MxKBTzKqGJBuBl7RLaWKttM8fUXS0MRZvwu2jTp5F156XsbAcxynRRxcqUMsVc56uDjVnmkZq2OZtWZjyF8o7rCRLEzlq2aRoRjokUdfxsPMmYZ2bZCLYup8LKO4AHztIc5dSVTjzRBqjN71QyL33ZNktkWUWRdQLnt19JpFwRSSkzauOc7vSbKq3sYumluX0kqtwM1jGcjOUoo20sC3xGdEKEnuc8q8TdQwfIXnVCgznnXRrXCHiQPWdKoswdZHuDVnxh9WRNWAeS6YYt6VVHV/ZqKRYgEApbnzDDynq4DFOEclzzMbhI1JZ7HGTarNo1iO4CepGvfc8x4RR1RzcEqLjXFS/VsSxy77FS2niJ4uJhavL56nsUJXox8PA6GHODdjRw9PEMzFGaozUsKtILqGLqosuu9td1tbTD6G/K9zU2HFUF71HTLWcBXytXWmKdIikhsSwBqP7QBYAHLpaTYrfU42Ip4TqS2H6xWDqHSqBdAQ1tQNePE7otoG3fUz9G62WsycKim3euvyJ8p29nzy1HHqvscfaEM1NS6fyema28m3M3y+s9aVt2eOr7IyPj6A064fev85zSxNGPveZ0RwteXueVipto0+FUH/qUR8zMnjaPxM3WArPdIaYgsLqQR/wDtTP8AdvMnj6fzNl2dPnYixqc0HfUqfwiV9Oj0Zouz3za8EZ3fnVpj96qf70q8b0j5l1gkufkih6wO6sh7hn+bSPTJPZFvRYrdspaqvGp5UgPqZDxNTovAnhQXXxK2rJ/aN5Kv0kekVPkTw49CBxK/bf7w+gkekVPiHDXQqOKXt8Xb6Srrz+Iuqa6FZxS8vVz/ABSrrPqTw30LRtZxoGbTd7TfUx6RP4mV9Gg94rwAbbrjc59D85KxVVc2VeDpPeKMbYgli9vaJvft8Jg5Nu50KCSyrY9b0b6VNRUjQghtGAJouyFOtpE+69j3HS9tCLp3MZJxI7P2bhzWWqK9PIuWwcmkya63L3Db2NwTrJcUQpvY9RtHauFwu0Pz6ljFdB1TmlSDOXdSQwJ0QKVsCbk6nQyqTtqXclfQ8V0i24+MqmqVWnTzuyIlwqFjdjrvJOpPGWSKbnGqMToo8Yd3sXSS3IJgKh3KfKQqEnyLOtFcy9NkVT8B8posJUfIzeKguZemwah4TVYCo+Rm8bBF6dHW4kD1mi7OkZvHxNNPo8g3t5CbR7OXNmUse+SNdLZFFfhv3zeOCpowli6jN1HBAe6gHpOqGGjyRzzxD5s1LheZ8pvGikc8qxatJRuH1mqgkZubZOWK2CRcnKaanSjCjc7N+yjfW0+LWGqPkfXOvDqZKnS+l8NJz35V+pmiwc+pV4mJyNtbaGKTI1C1mupz3IO7lbdNFg+rKPFdEcIYf+RpNY4a2zZlLEN7pE3RgRU3sn/kOIPr5y9am5K/NFKc0tFszqbUxtWsKdHDL1dF7WyWGdyMpd7bzrYDhr4cljZNcye0cT1a4ilS/wB2xGH6tuKFKWW667y1AD96NrkrW1yjpJtFK6rVWmEqVERqxGhqFQVRiu4MQTe28i/ESLIi7bszza1GpkOpsy6g8pCk4NSW5q4qacXsdSm/WIGrtmY6gEmwHD2d07FapFOq7s5GnTk1SViFTqRuX0UfMSkqdDkjSM63UpbEoNyj1+kyfCW0fuaLivd/YpbF8lHiLj1lXKPKJZRlzkZqr5vhHhp8pSTvyLxVuZUKJ5SmQvmRMUW5S2SRXOixMJUO4H1llRm+RV1YIuXZlY/A3kZosLVfJmbxNNc0WrsWsfhPoJosDVfIo8bTXMuXYFTjbzE0XZ9Qo8fAtXo83Fl9fwl12dLqUfaEehavR7m48jLrs75lH2h8i1ej68W9P85ouz49Sjx8uSLV2FS4k+gl1gKfUo8dU6FqbFpDcpllgaZR42oTbYSncGHdD7Oi+oWNkug06OrybxI/CSuzIfPyIePl8i1Oj1PeUB/aYt6TWPZ1NcvMzeOqdfI2U9lhdwUdwm8cLFbJGMsRJ7tlwwP63pNFRSM3UJDBLzPpLcJEZ2SGETkfOTw4kZ2SGGT7P1k5I9CMzJikv2R5CTlXQXYMND3GS9gUiVTDQ5NyLBIuTYV5BIs0A8yMPPI4Z6vEJjDyeGV4hIYeW4ZHEJihJ4ZXOSFCWyEZyGG6yg4ekLgMGCsNFYfEvI/zynBVw0k7wWh1QrK1pMKuMsHCYYA1WDVPaepdgSQbHdqTpunPkn0fga5k92crEUK1U6Umtzay3Pbe2klUKstosuqtOO8kCbDqsbuVHZe/nNY4Gq9yrxlOOxrGxGO+p5CbLASe8jF42K2RNdhLxc+Uuuz482VeOl0LF2HS4lj5fhLrAU/mUeNqFq7Ioj4fMy6wdJcijxdV8y5NmUuFMepmiwtNbRM3iKnxFybPXhSH3ZosPHlHyKOvL4vMvXBHglvITRUX0M3U6ssGDbs85dUpFeIiQwR5iTwmOIiQwP63pJ4XzI4nyJDBLzPpJ4SI4jJDCJ2+cnhxI4jJDDp9n5yckehGeRMUl+yPKTlXQjMyQA5SbEDkgUAIAQAgBACAEALwQF4FxGCbmVTMkWYy0ARaLk2IlpFycos0i5axhFKc2U3zD6sScpGYkKfZJykZiYoN9k+Rlsj6EZ0TGFf7Pyk8N9CvERMYNuzzluEyOIiQwTcx6yeEyOIiQwP63pLcL5kcQmMEvMyeEiOIyQwidvnJ4USOIyQwyfZ+cnhx6EZ5EhSX7I8pOVdCMzJBRyk2IJSQKAEAIAQAgBACAF4IuF4FwvAuF4FxXgBeAF4ArwAzQAvAFeAGaALNADNIIMt5jc3EWkXJsItIuLES0i5NiOaLk2OiKK/ZHlOjJHoYZn1JBRyEmyIuSkgUAIAQAgBACAEALwRcLwLheBcV4AXgBmgBeALNADNAFeAF4uAzSALNADNAFmi4DNFwLNFxqF5FxZheLk2FeLiwXi4yheRcZRXi5NgvFxYM0i4MrnU95mTepsloRLStybES0i5NiJaRctYWaRcWOzedxx3C8AV4AXgBmgCvAC8ALwLCvAC8gBmgCzQBZoIuGaAGaLk6izRcaheRcmzC8XFhXi4sF5FxYIuTlFeLiwXi5NgvIuBZouRoGaCRZpFxYM0XFhZouTZhmi4sxZpFxYM0XFgvFycoryLk2C8XFjNVOpmUnqaxWhWWlLlrES8i5NiJaLk2IlpFwf/Z"
        }})],

      args,
    }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.20"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.20"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[(...args:any) => <Elements.ScrollBar pass={{
            styles: [
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "70px"
        }})] }})],
            arrProps: [
        (...args:any) => props.horizontal({ pass: {
          boolean: ['true']
        }}), (...args:any) => props.showsHorizontalScrollIndicator({ pass: {
          showsHorizontalScrollIndicator: [jsvals.j8({pass: {
          propertieValues: "false"
        }})]
        }})],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            
        (...args:any) => props.horizontal({ pass: {
          boolean: ['true']
        }}), 
        (...args:any) => props.ItemSeparatorComponent({ pass: {
          component: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ]
        }}), (...args:any) => props.ListHeaderComponent({pass: {
          component: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ]
        }})
          ],

          pData: jsvals.j8({pass: {
          propertieValues: "all.categs"
        }}),

          itemElements: [
            (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
        
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), 
stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }}), 
stls.shadows({ pass: {
          shadowColor: ['#000'],
          shadowOffset: ['{width: 0, height: 0}'],
          shadowOpacity: [jsvals.j8({pass: {
          propertieValues: "0.1"
        }})],
          shadowRadius: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})],
        }}), stls.marginVertical({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "5px"
        }})] }}), 
        stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "110px"
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "50px"
        }})] }})],

          childrenItems: [
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
    stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "26px"
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "26px"
        }})] }})],

      URIvariablePath:[jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.item.image"
        }}),
          args
        }})],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.item.name"
        }}),
          args
        }})
          ],

          args,

        }}/>],

          pressableFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [jsvals.j8({pass: {
          propertieValues: "all.currCateg"
        }})],
          value: jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.item.name"
        }}),
          args
        }})
        }})],

          args,
        }}/>
          ],

          args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [
        (...args:any) => <Elements.Watcher pass={{variable: [jsvals.j8({pass: {
          propertieValues: "all.currCateg"
        }})],childrenItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            
        (...args:any) => props.horizontal({ pass: {
          boolean: ['true']
        }}), 
        (...args:any) => props.ItemSeparatorComponent({ pass: {
          component: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "20px"
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.color({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.txtGrey9"
        }})
        }})] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "•"
        }})
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ]
        }}), (...args:any) => props.ListHeaderComponent({pass: {
          component: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.20"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.20"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ]
        }})
          ],

          pData: jsvals.j3({pass: {
          arrayStrings: [
        jsvals.j8({pass: {
          propertieValues: "all."
        }}), jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.currCateg"
        }})
        }})],
          joinSeparator: ""
        }}),

          itemElements: [
            (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "20px"
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.color({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.txtGrey9"
        }})
        }})] }})
          ],

          children: [
            jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.item.name"
        }}),
          args
        }})
          ],

          args,

        }}/>],

          pressableFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [jsvals.j8({pass: {
          propertieValues: "all.currProds"
        }})],
          value: jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.item.name"
        }}),
          args
        }})
        }})],

          args,
        }}/>
          ],

          args,
        }}/>],arrFuncs: [() => {}],args,}}/>, (...args:any) => <Elements.Watcher pass={{variable: [jsvals.j8({pass: {
          propertieValues: "all.currProds"
        }})],childrenItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            
        (...args:any) => props.ListHeaderComponent({pass: {
          component: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ]
        }}), (...args:any) => props.ListFooterComponent({ pass: {
          component: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "60px"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ]
        }})
          ],

          pData: jsvals.j3({pass: {
          arrayStrings: [
        jsvals.j8({pass: {
          propertieValues: "all.lists."
        }}), jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.currProds"
        }})
        }})],
          joinSeparator: ""
        }}),

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), 
stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }}), 
stls.shadows({ pass: {
          shadowColor: ['#000'],
          shadowOffset: ['{width: 0, height: 0}'],
          shadowOpacity: [jsvals.j8({pass: {
          propertieValues: "0.1"
        }})],
          shadowRadius: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})],
        }}), stls.marginVertical({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "5px"
        }})] }}), 
        stls.marginHorizontal({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "15px"
        }})] }}), stls.padding({ pass: { arrayValue: ['10px'] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "50px"
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "80px"
        }})] }})],

      URIvariablePath:[jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.item.image"
        }}),
          args
        }})],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.flex({ pass: { arrayValue: ['1'] }}), 
stls.borderRightWidth({ pass: { arrayValue: ['1px'] }}), stls.borderRightColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#efefef"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.color({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.txtGrey4"
        }})
        }})] }})
          ],

          children: [
            jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.0.item.name"
        }}),
          args
        }})
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            
stls.fontSize({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }}), stls.color({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.txtGrey9"
        }})
        }})] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "Valor Médio"
        }})
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.fontWeight({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "600"
        }})] }})
          ],

          children: [
            
        jsvals.j8({pass: {
          propertieValues: "R$"
        }}), jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.0.item.price"
        }}),
          args
        }})
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "30px"
        }})] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.fontWeight({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "600"
        }})] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "+"
        }})
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.fontWeight({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "600"
        }})] }})
          ],

          children: [
            jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.0.item.amount"
        }}),
          args
        }})
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.fontWeight({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "600"
        }})] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "-"
        }})
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

          args,
        }}/>],arrFuncs: [() => {}],args,}}/>],
            args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.position({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "absolute"
        }})] }}), 
stls.bottom({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "0"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "40px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "space-around"
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.shadows({ pass: {
          shadowColor: ['#000'],
          shadowOffset: [jsvals.j8({pass: {
          propertieValues: "{width: 0, height: -4}"
        }})],
          shadowOpacity: [jsvals.j8({pass: {
          propertieValues: "0.1"
        }})],
          shadowRadius: [jsvals.j8({pass: {
          propertieValues: "6px"
        }})],
        }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "70px"
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "70px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.marginTop({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "-20px"
        }})] }}), 
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100px"
        }})] }}), 
stls.shadows({ pass: {
          shadowColor: ['#000'],
          shadowOffset: [jsvals.j8({pass: {
          propertieValues: "{width: 0, height: -4}"
        }})],
          shadowOpacity: [jsvals.j8({pass: {
          propertieValues: "0.1"
        }})],
          shadowRadius: [jsvals.j8({pass: {
          propertieValues: "6px"
        }})],
        }}), stls.shadows({ pass: {
          shadowColor: ['#000'],
          shadowOffset: ['{width: 0, height: 0}'],
          shadowOpacity: [jsvals.j8({pass: {
          propertieValues: "0.1"
        }})],
          shadowRadius: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})],
        }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[(...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100px"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "56px"
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "56px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primaryColor"
        }})
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg xmlns="http://www.w3.org/2000/svg" width={26} height={25} fill="red" viewBox="0 0 26 25" {...props} ><Path fill="#fff" d="M8.294 19.571c-1.5 0-2.714 1.197-2.714 2.673s1.215 2.673 2.714 2.673c1.499 0 2.714-1.197 2.714-2.673S9.793 19.57 8.294 19.57Zm0 4.158a1.497 1.497 0 0 1-1.508-1.485c0-.82.675-1.485 1.508-1.485s1.508.665 1.508 1.485c0 .82-.675 1.485-1.508 1.485ZM19.755 19.571c-1.5 0-2.715 1.197-2.715 2.673s1.216 2.673 2.715 2.673c1.499 0 2.714-1.197 2.714-2.673s-1.215-2.673-2.714-2.673Zm0 4.158a1.497 1.497 0 0 1-1.508-1.485c0-.82.675-1.485 1.508-1.485.832 0 1.508.665 1.508 1.485 0 .82-.676 1.485-1.508 1.485ZM25.877 3.98a.758.758 0 0 0-.483-.238L5.761 3.475 5.218 1.84A2.772 2.772 0 0 0 2.624 0H.604A.599.599 0 0 0 0 .594c0 .328.27.594.603.594h2.02a1.566 1.566 0 0 1 1.449 1.04l3.83 11.374-.302.683a2.813 2.813 0 0 0 .272 2.584 2.815 2.815 0 0 0 2.262 1.247h11.732a.599.599 0 0 0 .603-.594.599.599 0 0 0-.603-.594H10.134a1.543 1.543 0 0 1-1.267-.713 1.612 1.612 0 0 1-.15-1.425l.24-.535 12.698-1.307a3.3 3.3 0 0 0 2.865-2.494l1.448-5.97a.499.499 0 0 0-.091-.504Zm-2.533 6.206a2.041 2.041 0 0 1-1.84 1.575L8.957 13.037 6.153 4.662l18.488.267-1.297 5.256Z" /></Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "25px",

      largura: "25px",

      preenchimento: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})],

      args,
    }}/>],

          pressableFunctions: [()=>console.log("Você Clicou!")],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.position({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "absolute"
        }})] }}), 
stls.bottom({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "0"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "40px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "space-around"
        }})] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
        
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg xmlns="http://www.w3.org/2000/svg" width={20} height={22} fill="red" viewBox="0 0 20 22" {...props} ><Path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21V11h6v10M1 8l9-7 9 7v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8Z" /></Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

          pressableFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("sc2");
        }
        ],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "70px"
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "70px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100px"
        }})] }}), stls.marginTop({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "-20px"
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[(...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100px"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "56px"
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "56px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primaryColor"
        }})
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg xmlns="http://www.w3.org/2000/svg" width={26} height={25} fill="red" viewBox="0 0 26 25" {...props} ><Path fill="#fff" d="M8.294 19.571c-1.5 0-2.714 1.197-2.714 2.673s1.215 2.673 2.714 2.673c1.499 0 2.714-1.197 2.714-2.673S9.793 19.57 8.294 19.57Zm0 4.158a1.497 1.497 0 0 1-1.508-1.485c0-.82.675-1.485 1.508-1.485s1.508.665 1.508 1.485c0 .82-.675 1.485-1.508 1.485ZM19.755 19.571c-1.5 0-2.715 1.197-2.715 2.673s1.216 2.673 2.715 2.673c1.499 0 2.714-1.197 2.714-2.673s-1.215-2.673-2.714-2.673Zm0 4.158a1.497 1.497 0 0 1-1.508-1.485c0-.82.675-1.485 1.508-1.485.832 0 1.508.665 1.508 1.485 0 .82-.676 1.485-1.508 1.485ZM25.877 3.98a.758.758 0 0 0-.483-.238L5.761 3.475 5.218 1.84A2.772 2.772 0 0 0 2.624 0H.604A.599.599 0 0 0 0 .594c0 .328.27.594.603.594h2.02a1.566 1.566 0 0 1 1.449 1.04l3.83 11.374-.302.683a2.813 2.813 0 0 0 .272 2.584 2.815 2.815 0 0 0 2.262 1.247h11.732a.599.599 0 0 0 .603-.594.599.599 0 0 0-.603-.594H10.134a1.543 1.543 0 0 1-1.267-.713 1.612 1.612 0 0 1-.15-1.425l.24-.535 12.698-1.307a3.3 3.3 0 0 0 2.865-2.494l1.448-5.97a.499.499 0 0 0-.091-.504Zm-2.533 6.206a2.041 2.041 0 0 1-1.84 1.575L8.957 13.037 6.153 4.662l18.488.267-1.297 5.256Z" /></Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "25px",

      largura: "25px",

      preenchimento: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})],

      args,
    }}/>],

          pressableFunctions: [()=>console.log("Você Clicou!")],

          args,
        }}/>],

            args,
          }}/>
        , (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
        
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="red" viewBox="0 0 22 22" {...props} ><Path fill="#000" d="M9.688 0C4.346 0 0 4.346 0 9.688c0 5.343 4.346 9.689 9.688 9.689 5.343 0 9.689-4.346 9.689-9.689C19.377 4.346 15.03 0 9.688 0Zm0 17.588c-4.356 0-7.9-3.544-7.9-7.9 0-4.355 3.544-7.9 7.9-7.9s7.9 3.544 7.9 7.9-3.544 7.9-7.9 7.9Z" /><Path fill="#000" d="m21.738 20.473-5.127-5.127a.894.894 0 1 0-1.265 1.265l5.127 5.127a.891.891 0 0 0 1.265 0 .894.894 0 0 0 0-1.265Z" /></Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

          pressableFunctions: [()=>console.log("Você Clicou!")],

          args,
        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[

stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), 

stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "rgba(0,0,0,0.6)"
        }})] }}), stls.position({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "absolute"
        }})] }})],

            variablePath:[jsvals.j8({pass: {
          propertieValues: "all.toggles.sideMenu"
        }})],

            expectedVal:[jsvals.j8({pass: {
          propertieValues: "show"
        }})],

            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "80%"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.position({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "absolute"
        }})] }}), 
stls.left({ pass: { arrayValue: ['1px'] }}), stls.padding({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }})],

      URIvariablePath:[jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/icons%2Fico%20(6).png?alt=media&token=c9cb8e31-1a79-47e1-828b-34bd0a0199d9"
        }})],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "5px"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "Voltar"
        }})
          ],

          args,

        }}/>],

          pressableFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [jsvals.j8({pass: {
          propertieValues: "all.toggles.sideMenu"
        }})],
          value: jsvals.j8({pass: {
          propertieValues: "hide"
        }})
        }})],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: jsvals.j8({pass: {
          propertieValues: "all.menuList"
        }}),

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }})],

      URIvariablePath:[jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.0.item.image"
        }}),
          args
        }})],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "5px"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.0.item.name"
        }}),
          args
        }})
          ],

          args,

        }}/>],

          pressableFunctions: [()=>console.log("Você Clicou!")],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          startFunctions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"sc3",

          styles:[
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primaryColor"
        }})
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

          screenElements:[
        (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
              {
                backgroundColor: 'blue',
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }
              ],

          childrenItems: [()=><></>],

          pressableFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("sc1");
        }
        ],

          args,
        }}/>, (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
              {
                backgroundColor: 'blue',
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }
              ],

          childrenItems: [(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "where"
        }})
          ],

          args,

        }}/>],

          pressableFunctions: [async (...args) =>
        functions.firebase.where({ args, pass:{
            fbInit: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.fbInit"
        }})
        }})],
            arrRefStrings: [jsvals.j8({pass: {
          propertieValues: "users"
        }})],
            arrWhere: [(...args) =>
        functions.firebase.whereConds({ args, pass:{
          arrStrings: [
        jsvals.j8({pass: {
          propertieValues: "userEmail"
        }}), 
        jsvals.j8({pass: {
          propertieValues: "=="
        }}), jsvals.j8({pass: {
          propertieValues: "sdd"
        }})],
        }})],
            arrFuncs: [() => {}],
        }})],

          args,
        }}/>],

          startFunctions:[async (...args) =>
        functions.firebase.fireInit({ args, pass:{
          fbConfig: jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.fbConfig"
        }})
        }}),
          arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [jsvals.j8({pass: {
          propertieValues: "all.fbInit"
        }})],
          value: jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0"
        }}),
          args
        }})
        }})]
        }})],

          args,
        }}/>, 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"Mt",

          styles:[
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

          screenElements:[() => {
                  const textStyle = {
                    fontSize: 20,
                    color: '#fff2',
                    textAlign:'center',
                    maxWidth: 200,
                    // maxWidth: '200px'<= #ATTENTION: Native ERROR! No string!
                  };

                  return (
                    <RN.Text style={textStyle}>
                      {'Adicione Elementos nessa tela!'}
                    </RN.Text>);
                }],

          startFunctions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => ({
            'all': jsvals.j8({pass: {
          propertieValues: { 
        'colors': jsvals.j8({pass: {
          propertieValues: { 
        "primaryColor": jsvals.j8({pass: {
          propertieValues: "#147804"
        }}), 
        "txtGrey9": jsvals.j8({pass: {
          propertieValues: "#999"
        }}), "txtGrey4": jsvals.j8({pass: {
          propertieValues: "#444"
        }}) }
        }}), 
        'sizes': jsvals.j8({pass: {
          propertieValues: { 
        'fixed': jsvals.j8({pass: {
          propertieValues: { 
        "10": jsvals.j8({pass: {
          propertieValues: "10px"
        }}), 
        "20": jsvals.j8({pass: {
          propertieValues: "20px"
        }}), "30": jsvals.j8({pass: {
          propertieValues: "30px"
        }}) }
        }}), 'percent': jsvals.j8({pass: {
          propertieValues: { 
        "10": jsvals.j8({pass: {
          propertieValues: "10%"
        }}), 
        "20": jsvals.j8({pass: {
          propertieValues: "20%"
        }}), 
        "50": jsvals.j8({pass: {
          propertieValues: "50%"
        }}), "100": jsvals.j8({pass: {
          propertieValues: "100%"
        }}) }
        }}) }
        }}), 
        'categs': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Pets"
        }}), "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/dog.png?alt=media&token=f5bf526c-5fb3-4092-869d-11ffcfb25d2f"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Limpeza"
        }}), "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/cleaning.png?alt=media&token=70c342c4-1e04-4dd8-ab71-2ef9227d777a"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Bebidas"
        }}), "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/drink.png?alt=media&token=99dc2e9d-fecf-4cc4-9c84-a6fd9a6d1985"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Alimentos"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Hortifruti"
        }}), "image": jsvals.j8({pass: {
          propertieValues: "https://th.bing.com/th/id/OIP.V0veQoHgEoXnjRVZJ37fDAHaEK?rs=1&pid=ImgDetMain"
        }})}
        }}) ]
        }}), 
        'prods': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Torta Holandesa MISS DAISY 470g"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/torta.png?alt=media&token=4daa4ce3-ca7d-45ec-a8b4-f4162e648368"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "26,79"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Requeijão Vigor"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/requeijao.png?alt=media&token=a15c2035-3ef5-4f14-a7c8-7d58dd7b1fc0"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "6,59"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Presunto Sadia 200g"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/presunto.png?alt=media&token=bc236340-c063-41c6-a98c-af1707cfe482"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "9,60"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Sorvete Kibon 800ml Ovomaltine"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/sorvete.png?alt=media&token=e3e69eb6-b7c6-4ee8-8c72-294417307398"
        }}), 
        "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }}), "price": jsvals.j8({pass: {
          propertieValues: "19,90"
        }})}
        }}) ]
        }}), 
        "currCateg": jsvals.j8({pass: {
          propertieValues: "Pets"
        }}), 
        "currProds": jsvals.j8({pass: {
          propertieValues: "prods"
        }}), 
        'Pets': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Rações"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Roupas"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Brinquedos"
        }})}
        }}) ]
        }}), 
        'Limpeza': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Higiene e Perfumaria"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Lavanderia"
        }})}
        }}) ]
        }}), 
        'Bebidas': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Refrigerantes"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Cafés, Chás e Achocolatados"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Sucos e Refrescos"
        }})}
        }}) ]
        }}), 
        'menuList': jsvals.j8({pass: {
          propertieValues: [ {"name": "Home", "image": "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/icons%2Ficons.png?alt=media&token=fee369a4-e148-45f7-9c27-fe70b66a06a8"},{"name": "Compras","image": "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/icons%2Ficons-1.png?alt=media&token=3ec27bf0-b38f-4733-8f7b-403ba22e9c30"},{"name": "Meu Perfil","image": "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/icons%2Ficons-2.png?alt=media&token=10a18172-cf2e-4ebc-8f25-fe2a31ef5e81"},{"name": "Sair","image": "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/icons%2Ficons-4.png?alt=media&token=c0276b6d-6e95-4637-888b-fe0e912a200a"} ]
        }}), 
        'lists': jsvals.j8({pass: {
          propertieValues: { 
        'Rações': jsvals.j8({pass: {
          propertieValues: [ {"name": "Ração Golden Gatos Adultos Carne", "price":"18,90", "amount":"0", "image": "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/prods%2Fracao-golden-gatos-castrados-carne-3823767-1kg-Frente.webp?alt=media&token=9a657bbd-58dd-40e5-be8c-af486231abc8"},{"name": "Ração Úmida Friskies Gatos Adultos Carne ao Molho", "price":"3,79", "amount":"0", "image": "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/prods%2Fracao-umida-friskies-gatos-adultos-carne-ao-molho.png?alt=media&token=a6eeab6e-2b91-4ee0-9e6a-f71492016f07"} ]
        }}), 
        'Higiene e Perfumaria': jsvals.j8({pass: {
          propertieValues: [ {"name": "Amaciante Concentrado Comfort Frescor Intenso 900 ml", "price":"10,60", "amount":"0",  "image": "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/prods%2Fsabao-liquido-omo-lavagem-perfeita-3l-1.webp?alt=media&token=fd68273c-cd77-4568-8b0f-7ef36048eb1b"},{"name": "Água Sanitária 2 Litros", "price":"4,30", "amount":"0", "image": "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/prods%2Fagua-sanitaria-carrefour-2-litros-1.webp?alt=media&token=9da6fa93-6d5f-420f-b29d-802a11980f81"} ]
        }}), 
        'Refrigerantes': jsvals.j8({pass: {
          propertieValues: [ {"name": "Coca-Cola Pet 600 ml", "price":"5,99", "amount":"0", "image": "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/prods%2Fcoca-cola-600ml-1.webp?alt=media&token=94f0b716-e56e-4fec-8ea4-5895593d9ea6"},{"name": "Kit 1 Coca-Cola Original + 1 Fanta Guaraná 2L", "price":"14,80", "amount":"0", "image": "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/prods%2F6534465_1.webp?alt=media&token=a6940c81-ddc8-4617-9348-49c06b841706"} ]
        }}), 'prods': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Torta Holandesa MISS DAISY 470g"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/torta.png?alt=media&token=4daa4ce3-ca7d-45ec-a8b4-f4162e648368"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "26,79"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Requeijão Vigor"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/requeijao.png?alt=media&token=a15c2035-3ef5-4f14-a7c8-7d58dd7b1fc0"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "6,59"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Presunto Sadia 200g"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/presunto.png?alt=media&token=bc236340-c063-41c6-a98c-af1707cfe482"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "9,60"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Sorvete Kibon 800ml Ovomaltine"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/sorvete.png?alt=media&token=e3e69eb6-b7c6-4ee8-8c72-294417307398"
        }}), 
        "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }}), "price": jsvals.j8({pass: {
          propertieValues: "19,90"
        }})}
        }}) ]
        }}) }
        }}), 'fbConfig': jsvals.j8({pass: {
          propertieValues: { 
        "apiKey": jsvals.j8({pass: {
          propertieValues: "AIzaSyDjAfyEUADq7EaRyFWlGFjP1Eoox9LJHgI"
        }}), 
        "authDomain": jsvals.j8({pass: {
          propertieValues: "devs-tests-95208.firebaseapp.com"
        }}), 
        "projectId": jsvals.j8({pass: {
          propertieValues: "devs-tests-95208"
        }}), 
        "storageBucket": jsvals.j8({pass: {
          propertieValues: "devs-tests-95208.appspot.com"
        }}), 
        "messagingSenderId": jsvals.j8({pass: {
          propertieValues: "750912250366"
        }}), "appId": jsvals.j8({pass: {
          propertieValues: "1:750912250366:web:4629eac789a718a74220af"
        }}) }
        }}) }
        }})
          });
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            ()=>{}
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
