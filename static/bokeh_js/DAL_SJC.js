document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("052eb455-631e-45a6-9ec7-152b3666a75f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '052eb455-631e-45a6-9ec7-152b3666a75f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"6d24bc46-ddaf-4e72-81e2-a099f0053206":{"roots":{"references":[{"attributes":{"overlay":{"id":"93bbdb5b-94ad-48a9-b63d-c52d933db231","type":"BoxAnnotation"},"plot":{"id":"916eeb49-0fcf-49cc-8320-cfd2a314f668","subtype":"Chart","type":"Plot"}},"id":"d7036f75-e9f9-4762-ba1b-a95593988ef7","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"e3ceaa9a-0e7c-483b-a543-349d4ce058e9","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.28,6.5,3.4444444444444446,6.111111111111111,5.888888888888889,4.555555555555555,3.625,4.25],"x":[6,8,20,8,20,8,6,6],"y":["Monday","Wednesday","Wednesday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"89463693-f0cf-4cc5-9f4c-f90e90c36b57","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1499af98-4574-466f-b3f7-8daefd172f60","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"32c6c512-1244-4a03-b623-2f9d26cf1473","type":"Rect"},{"attributes":{"data_source":{"id":"f371cd22-e8f9-44d7-a77a-d167d7524949","type":"ColumnDataSource"},"glyph":{"id":"c8a055e0-7220-4bd2-a8ad-ac8e690d1b06","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5b06e516-f8c9-4e86-9945-b8a2373f7462","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[24.0,26.545454545454547,26.555555555555557],"x":[15,18,21],"y":["Wednesday","Wednesday","Thursday"]}},"id":"6d20fd12-289f-458f-945f-9ce489044b64","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"76d3cb13-ac0f-47e8-8745-2af0de610168","type":"ColumnDataSource"},"glyph":{"id":"4ecf0677-2efa-46a5-93c2-32d4221581cd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2b0de981-6086-4459-8ff2-f54f5f49e7f0","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"19830eac-5f8e-4721-8ae0-5a8197910f41","type":"Rect"},{"attributes":{"plot":{"id":"916eeb49-0fcf-49cc-8320-cfd2a314f668","subtype":"Chart","type":"Plot"}},"id":"d77bf68e-ce45-4662-b811-43365e2dc12b","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8a055e0-7220-4bd2-a8ad-ac8e690d1b06","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[24.0,26.545454545454547,26.555555555555557],"x":[15,18,21],"y":["Wednesday","Wednesday","Thursday"]}},"id":"9cfd499a-7b5f-4e3f-9bd4-eae831490df5","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,28.333333333333332,30.0,27.0,30.0,30.0,30.0],"x":[8,17,21,17,18,15,18,21,21],"y":["Monday","Tuesday","Tuesday","Wednesday","Thursday","Friday","Friday","Friday","Sunday"]}},"id":"76d3cb13-ac0f-47e8-8745-2af0de610168","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1c32d7cd-faaf-461f-8848-7a28f587b790","subtype":"Chart","type":"Plot"}},"id":"8f234626-f862-409a-98ab-2fc33e2f9b0a","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"916eeb49-0fcf-49cc-8320-cfd2a314f668","subtype":"Chart","type":"Plot"}},"id":"c480b909-c034-4f7e-8949-e06e56ba9828","type":"PanTool"},{"attributes":{"data_source":{"id":"34cadbf4-c3ea-42e8-b257-3db5de8a12b1","type":"ColumnDataSource"},"glyph":{"id":"f35897b1-d7ed-4b54-87e3-47ca30c26be7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2ba46fe0-3c4d-4c3e-9348-a042e9d53a59","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2e1ded3c-fd83-4ae8-93e9-a34c9ba13413","type":"ColumnDataSource"},"glyph":{"id":"d195d0b2-3dcb-4823-bc5b-14ae782b0bac","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c176032b-6fbb-4d3f-ad28-d2f6b205a6df","type":"GlyphRenderer"},{"attributes":{},"id":"8e90e867-58ed-434c-8ae1-8f31a02ddccd","type":"BasicTickFormatter"},{"attributes":{},"id":"7438359c-d108-46a1-a1b8-af96a6fc31ab","type":"CategoricalTickFormatter"},{"attributes":{},"id":"06dcdec3-26e2-46f4-a56a-15f3e69ec59f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1c32d7cd-faaf-461f-8848-7a28f587b790","subtype":"Chart","type":"Plot"}},"id":"dd40cd2c-4d21-464b-b75d-32a3cbf69488","type":"SaveTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"01aaa12f-23b8-4db3-b9a5-addd821e12c6","type":"BasicTickFormatter"},"plot":{"id":"1c32d7cd-faaf-461f-8848-7a28f587b790","subtype":"Chart","type":"Plot"},"ticker":{"id":"68474d59-acf1-4dc8-99de-bc20c4880935","type":"BasicTicker"}},"id":"668749b4-bf5e-45f7-b059-88ed9eb34139","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.476190476190476,9.4,7.363636363636363,9.0,7.222222222222222,8.11111111111111,8.0,8.12,10.0,8.619047619047619,10.0],"x":[10,15,17,20,8,20,17,6,20,18,20],"y":["Monday","Monday","Monday","Monday","Tuesday","Tuesday","Thursday","Friday","Friday","Sunday","Sunday"]}},"id":"0cf18547-3f92-447a-809b-6ab7f8e05db4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1c32d7cd-faaf-461f-8848-7a28f587b790","subtype":"Chart","type":"Plot"}},"id":"11da1d42-1772-4c60-9b93-1c217a72c442","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b8f3fc6-95cb-40d5-b817-6c80e393c9d1","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"561b42ac-d695-4b42-8aff-5dfd5f0c72b3","type":"Rect"},{"attributes":{"plot":{"id":"916eeb49-0fcf-49cc-8320-cfd2a314f668","subtype":"Chart","type":"Plot"}},"id":"eb929158-8d2c-4a38-9672-4dc042be2657","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93bbdb5b-94ad-48a9-b63d-c52d933db231","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.32,2.111111111111111,2.090909090909091,2.0,2.238095238095238,3.111111111111111,2.857142857142857,1.5714285714285714,0.0],"x":[6,6,10,6,10,9,8,10,16],"y":["Tuesday","Wednesday","Wednesday","Thursday","Thursday","Saturday","Sunday","Sunday","Sunday"]}},"id":"dbf541a2-a3af-46ce-88a7-602e341d61ff","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"e580a59a-42f7-48cc-922b-cbbe5c9c59c3","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"64a64538-b290-44ee-8dd5-89a3c1119d7d","type":"Rect"},{"attributes":{"data_source":{"id":"dbf541a2-a3af-46ce-88a7-602e341d61ff","type":"ColumnDataSource"},"glyph":{"id":"64a64538-b290-44ee-8dd5-89a3c1119d7d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"69c667b7-5591-4646-aee4-8170dbcdc5d4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.681818181818183,19.846153846153847],"x":[18,17],"y":["Monday","Friday"]}},"id":"84f9a0db-99ec-40b9-9c18-c03d6dea7c8e","type":"ColumnDataSource"},{"attributes":{},"id":"32498e8b-c423-4e4d-98ac-5e1fbc3d504b","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ecf0677-2efa-46a5-93c2-32d4221581cd","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a590d8a7-846e-4552-9d19-39bf15dd58df","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"95900a99-54f6-489b-aa69-bb624488a3a8","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c480b909-c034-4f7e-8949-e06e56ba9828","type":"PanTool"},{"id":"eb929158-8d2c-4a38-9672-4dc042be2657","type":"WheelZoomTool"},{"id":"d7036f75-e9f9-4762-ba1b-a95593988ef7","type":"BoxZoomTool"},{"id":"d5d63069-7df0-45e0-b46f-f608e81c012f","type":"SaveTool"},{"id":"d77bf68e-ce45-4662-b811-43365e2dc12b","type":"ResetTool"},{"id":"6d5e900c-470b-4c5e-9453-dc2b07373864","type":"HelpTool"}]},"id":"59fc8a68-c705-4952-8634-14a5b3847eed","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c004c4db-0eb7-4f13-89fe-561bb3f7b01d","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.571428571428571,10.952380952380953,11.047619047619047,12.066666666666666],"x":[10,10,14,16],"y":["Tuesday","Friday","Saturday","Saturday"]}},"id":"93dba603-4fbc-4042-93db-8ea358c6a603","type":"ColumnDataSource"},{"attributes":{},"id":"f1bccb17-c447-4a51-b890-8607a517f124","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.6,21.238095238095237,20.444444444444443,22.1],"x":[15,18,15,15],"y":["Tuesday","Tuesday","Thursday","Sunday"]}},"id":"fd141cd5-e253-4c4c-8221-75c70c0ba6d2","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.571428571428571,10.952380952380953,11.047619047619047,12.066666666666666],"x":[10,10,14,16],"y":["Tuesday","Friday","Saturday","Saturday"]}},"id":"e92fcee6-2840-440f-a15c-aca1189dc2c2","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"00025256-371d-4193-b1ad-c1153abf02f7","type":"Panel"},{"id":"15a316ad-3544-4130-91d6-98437108d9a3","type":"Panel"}]},"id":"b58d0508-d94e-4b67-a341-eeb47e185a96","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.666666666666666,13.75,15.666666666666666,16.2,13.894736842105264,15.5],"x":[21,21,10,17,18,17],"y":["Monday","Wednesday","Saturday","Saturday","Saturday","Sunday"]}},"id":"c5a6db6a-3c6f-4284-807b-b31fe4aca800","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"e580a59a-42f7-48cc-922b-cbbe5c9c59c3","type":"LinearColorMapper"},"formatter":{"id":"8e90e867-58ed-434c-8ae1-8f31a02ddccd","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"1c32d7cd-faaf-461f-8848-7a28f587b790","subtype":"Chart","type":"Plot"},"ticker":{"id":"da3ad048-a12b-40fe-83ec-b4cf1c535215","type":"BasicTicker"}},"id":"e4d12680-d384-41da-8f7c-ca1595f20048","type":"ColorBar"},{"attributes":{"plot":{"id":"916eeb49-0fcf-49cc-8320-cfd2a314f668","subtype":"Chart","type":"Plot"}},"id":"d5d63069-7df0-45e0-b46f-f608e81c012f","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.6,21.238095238095237,20.444444444444443,22.1],"x":[15,18,15,15],"y":["Tuesday","Tuesday","Thursday","Sunday"]}},"id":"f371cd22-e8f9-44d7-a77a-d167d7524949","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"91f8b30e-4161-4f5e-8102-f28464b3b150","type":"ColumnDataSource"},"glyph":{"id":"19830eac-5f8e-4721-8ae0-5a8197910f41","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c1fd4f3a-9121-4657-89da-0cb4b8801643","type":"GlyphRenderer"},{"attributes":{"child":{"id":"916eeb49-0fcf-49cc-8320-cfd2a314f668","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"00025256-371d-4193-b1ad-c1153abf02f7","type":"Panel"},{"attributes":{"plot":{"id":"1c32d7cd-faaf-461f-8848-7a28f587b790","subtype":"Chart","type":"Plot"}},"id":"aabf0cbd-c75e-44ca-bd76-80f8761aa56f","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"fa92f8dd-cf4f-4a0b-9620-852f6978017c","type":"LinearAxis"}],"left":[{"id":"d06621db-9e76-4231-a105-0d6dd601650d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"93bbdb5b-94ad-48a9-b63d-c52d933db231","type":"BoxAnnotation"},{"id":"c1fd4f3a-9121-4657-89da-0cb4b8801643","type":"GlyphRenderer"},{"id":"dfe93e1d-4a18-432d-80f5-1bad14e076d3","type":"GlyphRenderer"},{"id":"dc2d4136-77e2-431c-83f7-2228504ba94e","type":"GlyphRenderer"},{"id":"89168f73-4f52-4de5-b098-479ce4bf7687","type":"GlyphRenderer"},{"id":"fb726d8a-c448-4c3f-a411-87cf48ec48d1","type":"GlyphRenderer"},{"id":"672e0532-9186-442f-bd97-6e184f67b77a","type":"GlyphRenderer"},{"id":"593ae6fa-2794-4ea9-b0d7-0faf8b490377","type":"GlyphRenderer"},{"id":"3bd0710e-3e98-42ee-a6c5-645c76e87ba6","type":"GlyphRenderer"},{"id":"69c667b7-5591-4646-aee4-8170dbcdc5d4","type":"GlyphRenderer"},{"id":"fa92f8dd-cf4f-4a0b-9620-852f6978017c","type":"LinearAxis"},{"id":"d06621db-9e76-4231-a105-0d6dd601650d","type":"CategoricalAxis"},{"id":"00d74b9f-c032-4df9-a6ce-2f59ee5fb919","type":"ColorBar"}],"right":[{"id":"00d74b9f-c032-4df9-a6ce-2f59ee5fb919","type":"ColorBar"}],"title":{"id":"e3ceaa9a-0e7c-483b-a543-349d4ce058e9","type":"Title"},"tool_events":{"id":"40a48a11-a74a-4ce2-99da-b201b36aa890","type":"ToolEvents"},"toolbar":{"id":"59fc8a68-c705-4952-8634-14a5b3847eed","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"4ba0f462-e33e-450c-9cc4-b36109a71629","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5bd2cfff-4b57-422d-a146-7a02bc6d99ef","type":"FactorRange"}},"id":"916eeb49-0fcf-49cc-8320-cfd2a314f668","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"66e427e3-46a5-4dec-8414-a2fd91598838","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"916eeb49-0fcf-49cc-8320-cfd2a314f668","subtype":"Chart","type":"Plot"},"ticker":{"id":"6f3a2c10-ba97-45f3-995e-097c53377165","type":"CategoricalTicker"}},"id":"d06621db-9e76-4231-a105-0d6dd601650d","type":"CategoricalAxis"},{"attributes":{},"id":"da3ad048-a12b-40fe-83ec-b4cf1c535215","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"11dcf230-30e4-40ae-9ecf-7257c26302a8","type":"Rect"},{"attributes":{},"id":"68474d59-acf1-4dc8-99de-bc20c4880935","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f35897b1-d7ed-4b54-87e3-47ca30c26be7","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e943d0c-eb92-4d43-844c-99a4dd4050f0","type":"Rect"},{"attributes":{},"id":"230489a3-4cf3-484c-952c-91d38c964e14","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a35c2911-debd-41f7-ab36-27d77dd78e11","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11e07cbc-0689-41d0-831a-cb9fb000e89f","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"e92fcee6-2840-440f-a15c-aca1189dc2c2","type":"ColumnDataSource"},"glyph":{"id":"1499af98-4574-466f-b3f7-8daefd172f60","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f41f8184-f54c-4604-8c1a-25e1512be424","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.28,6.5,3.4444444444444446,6.111111111111111,5.888888888888889,4.555555555555555,3.625,4.25],"x":[6,8,20,8,20,8,6,6],"y":["Monday","Wednesday","Wednesday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"2e1ded3c-fd83-4ae8-93e9-a34c9ba13413","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"bda05c27-2dc7-40c0-9479-2eeabe830676","type":"Title"},{"attributes":{"overlay":{"id":"11e07cbc-0689-41d0-831a-cb9fb000e89f","type":"BoxAnnotation"},"plot":{"id":"1c32d7cd-faaf-461f-8848-7a28f587b790","subtype":"Chart","type":"Plot"}},"id":"d9107bdd-975e-492c-9e48-b5f35f4bf873","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"89463693-f0cf-4cc5-9f4c-f90e90c36b57","type":"ColumnDataSource"},"glyph":{"id":"32c6c512-1244-4a03-b623-2f9d26cf1473","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3bd0710e-3e98-42ee-a6c5-645c76e87ba6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"1c32d7cd-faaf-461f-8848-7a28f587b790","subtype":"Chart","type":"Plot"}},"id":"6d019fab-696f-41c9-89a2-437bfc49ef65","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c9120a24-79a3-4281-971a-de6a5122d231","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.666666666666666,13.75,15.666666666666666,16.2,13.894736842105264,15.5],"x":[21,21,10,17,18,17],"y":["Monday","Wednesday","Saturday","Saturday","Saturday","Sunday"]}},"id":"c4cc3aca-4c98-4036-a8f1-584f8eb9a04a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.32,2.111111111111111,2.090909090909091,2.0,2.238095238095238,3.111111111111111,2.857142857142857,1.5714285714285714,0.0],"x":[6,6,10,6,10,9,8,10,16],"y":["Tuesday","Wednesday","Wednesday","Thursday","Thursday","Saturday","Sunday","Sunday","Sunday"]}},"id":"34cadbf4-c3ea-42e8-b257-3db5de8a12b1","type":"ColumnDataSource"},{"attributes":{},"id":"66e427e3-46a5-4dec-8414-a2fd91598838","type":"CategoricalTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"668749b4-bf5e-45f7-b059-88ed9eb34139","type":"LinearAxis"}],"left":[{"id":"c3151177-22f9-4fa6-803f-ff2f8bc68e34","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"11e07cbc-0689-41d0-831a-cb9fb000e89f","type":"BoxAnnotation"},{"id":"2b0de981-6086-4459-8ff2-f54f5f49e7f0","type":"GlyphRenderer"},{"id":"5ef7db03-cb61-4305-a718-487e0b385f51","type":"GlyphRenderer"},{"id":"5b06e516-f8c9-4e86-9945-b8a2373f7462","type":"GlyphRenderer"},{"id":"d79b5ed2-5661-4c5a-9942-ec2c855ebdfb","type":"GlyphRenderer"},{"id":"4b12c430-18df-4b2b-8941-1a6741264820","type":"GlyphRenderer"},{"id":"f41f8184-f54c-4604-8c1a-25e1512be424","type":"GlyphRenderer"},{"id":"c1eeda63-3b04-4703-8c8f-383995295c4c","type":"GlyphRenderer"},{"id":"c176032b-6fbb-4d3f-ad28-d2f6b205a6df","type":"GlyphRenderer"},{"id":"2ba46fe0-3c4d-4c3e-9348-a042e9d53a59","type":"GlyphRenderer"},{"id":"668749b4-bf5e-45f7-b059-88ed9eb34139","type":"LinearAxis"},{"id":"c3151177-22f9-4fa6-803f-ff2f8bc68e34","type":"CategoricalAxis"},{"id":"e4d12680-d384-41da-8f7c-ca1595f20048","type":"ColorBar"}],"right":[{"id":"e4d12680-d384-41da-8f7c-ca1595f20048","type":"ColorBar"}],"title":{"id":"bda05c27-2dc7-40c0-9479-2eeabe830676","type":"Title"},"tool_events":{"id":"f1bccb17-c447-4a51-b890-8607a517f124","type":"ToolEvents"},"toolbar":{"id":"4c2ab76c-f75d-42fb-93d8-a5fd1696a52d","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"ffb30977-8610-466c-b994-09cc10f3abb7","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"da9263cf-30c5-4a5f-b02e-ba51b2838594","type":"FactorRange"}},"id":"1c32d7cd-faaf-461f-8848-7a28f587b790","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"01aaa12f-23b8-4db3-b9a5-addd821e12c6","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"ffb30977-8610-466c-b994-09cc10f3abb7","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d195d0b2-3dcb-4823-bc5b-14ae782b0bac","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aabf0cbd-c75e-44ca-bd76-80f8761aa56f","type":"PanTool"},{"id":"8f234626-f862-409a-98ab-2fc33e2f9b0a","type":"WheelZoomTool"},{"id":"d9107bdd-975e-492c-9e48-b5f35f4bf873","type":"BoxZoomTool"},{"id":"dd40cd2c-4d21-464b-b75d-32a3cbf69488","type":"SaveTool"},{"id":"11da1d42-1772-4c60-9b93-1c217a72c442","type":"ResetTool"},{"id":"6d019fab-696f-41c9-89a2-437bfc49ef65","type":"HelpTool"}]},"id":"4c2ab76c-f75d-42fb-93d8-a5fd1696a52d","type":"Toolbar"},{"attributes":{"data_source":{"id":"fd141cd5-e253-4c4c-8221-75c70c0ba6d2","type":"ColumnDataSource"},"glyph":{"id":"a35c2911-debd-41f7-ab36-27d77dd78e11","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dc2d4136-77e2-431c-83f7-2228504ba94e","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"5bd2cfff-4b57-422d-a146-7a02bc6d99ef","type":"FactorRange"},{"attributes":{"data_source":{"id":"6cd87c26-aff8-4a1f-961f-445168c9e88f","type":"ColumnDataSource"},"glyph":{"id":"c004c4db-0eb7-4f13-89fe-561bb3f7b01d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d79b5ed2-5661-4c5a-9942-ec2c855ebdfb","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"93dba603-4fbc-4042-93db-8ea358c6a603","type":"ColumnDataSource"},"glyph":{"id":"a590d8a7-846e-4552-9d19-39bf15dd58df","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"672e0532-9186-442f-bd97-6e184f67b77a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.476190476190476,9.4,7.363636363636363,9.0,7.222222222222222,8.11111111111111,8.0,8.12,10.0,8.619047619047619,10.0],"x":[10,15,17,20,8,20,17,6,20,18,20],"y":["Monday","Monday","Monday","Monday","Tuesday","Tuesday","Thursday","Friday","Friday","Sunday","Sunday"]}},"id":"61d20eec-1ac5-40c2-96c4-e7808f430e6c","type":"ColumnDataSource"},{"attributes":{},"id":"928f0ef7-a857-413d-b49b-3de5db3175a4","type":"BasicTicker"},{"attributes":{"data_source":{"id":"6d20fd12-289f-458f-945f-9ce489044b64","type":"ColumnDataSource"},"glyph":{"id":"561b42ac-d695-4b42-8aff-5dfd5f0c72b3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5ef7db03-cb61-4305-a718-487e0b385f51","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"da9263cf-30c5-4a5f-b02e-ba51b2838594","type":"FactorRange"},{"attributes":{"callback":null,"end":23},"id":"4ba0f462-e33e-450c-9cc4-b36109a71629","type":"Range1d"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"7438359c-d108-46a1-a1b8-af96a6fc31ab","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"1c32d7cd-faaf-461f-8848-7a28f587b790","subtype":"Chart","type":"Plot"},"ticker":{"id":"60570136-0e7a-4048-856a-dbaa644c041b","type":"CategoricalTicker"}},"id":"c3151177-22f9-4fa6-803f-ff2f8bc68e34","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"0cf18547-3f92-447a-809b-6ab7f8e05db4","type":"ColumnDataSource"},"glyph":{"id":"5e943d0c-eb92-4d43-844c-99a4dd4050f0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"593ae6fa-2794-4ea9-b0d7-0faf8b490377","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"84f9a0db-99ec-40b9-9c18-c03d6dea7c8e","type":"ColumnDataSource"},"glyph":{"id":"0b8f3fc6-95cb-40d5-b817-6c80e393c9d1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"89168f73-4f52-4de5-b098-479ce4bf7687","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"61d20eec-1ac5-40c2-96c4-e7808f430e6c","type":"ColumnDataSource"},"glyph":{"id":"11dcf230-30e4-40ae-9ecf-7257c26302a8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c1eeda63-3b04-4703-8c8f-383995295c4c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.681818181818183,19.846153846153847],"x":[18,17],"y":["Monday","Friday"]}},"id":"6cd87c26-aff8-4a1f-961f-445168c9e88f","type":"ColumnDataSource"},{"attributes":{},"id":"40a48a11-a74a-4ce2-99da-b201b36aa890","type":"ToolEvents"},{"attributes":{},"id":"6f3a2c10-ba97-45f3-995e-097c53377165","type":"CategoricalTicker"},{"attributes":{"color_mapper":{"id":"904589f8-7bf1-486c-afb5-1663d30ed2d9","type":"LinearColorMapper"},"formatter":{"id":"06dcdec3-26e2-46f4-a56a-15f3e69ec59f","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"916eeb49-0fcf-49cc-8320-cfd2a314f668","subtype":"Chart","type":"Plot"},"ticker":{"id":"928f0ef7-a857-413d-b49b-3de5db3175a4","type":"BasicTicker"}},"id":"00d74b9f-c032-4df9-a6ce-2f59ee5fb919","type":"ColorBar"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"904589f8-7bf1-486c-afb5-1663d30ed2d9","type":"LinearColorMapper"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"230489a3-4cf3-484c-952c-91d38c964e14","type":"BasicTickFormatter"},"plot":{"id":"916eeb49-0fcf-49cc-8320-cfd2a314f668","subtype":"Chart","type":"Plot"},"ticker":{"id":"32498e8b-c423-4e4d-98ac-5e1fbc3d504b","type":"BasicTicker"}},"id":"fa92f8dd-cf4f-4a0b-9620-852f6978017c","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c5a6db6a-3c6f-4284-807b-b31fe4aca800","type":"ColumnDataSource"},"glyph":{"id":"95900a99-54f6-489b-aa69-bb624488a3a8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fb726d8a-c448-4c3f-a411-87cf48ec48d1","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"050d7f48-089f-4fdb-8b86-8a66e970e628","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,28.333333333333332,30.0,27.0,30.0,30.0,30.0],"x":[8,17,21,17,18,15,18,21,21],"y":["Monday","Tuesday","Tuesday","Wednesday","Thursday","Friday","Friday","Friday","Sunday"]}},"id":"91f8b30e-4161-4f5e-8102-f28464b3b150","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c4cc3aca-4c98-4036-a8f1-584f8eb9a04a","type":"ColumnDataSource"},"glyph":{"id":"050d7f48-089f-4fdb-8b86-8a66e970e628","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4b12c430-18df-4b2b-8941-1a6741264820","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"9cfd499a-7b5f-4e3f-9bd4-eae831490df5","type":"ColumnDataSource"},"glyph":{"id":"c9120a24-79a3-4281-971a-de6a5122d231","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dfe93e1d-4a18-432d-80f5-1bad14e076d3","type":"GlyphRenderer"},{"attributes":{},"id":"60570136-0e7a-4048-856a-dbaa644c041b","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"916eeb49-0fcf-49cc-8320-cfd2a314f668","subtype":"Chart","type":"Plot"}},"id":"6d5e900c-470b-4c5e-9453-dc2b07373864","type":"HelpTool"},{"attributes":{"child":{"id":"1c32d7cd-faaf-461f-8848-7a28f587b790","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"15a316ad-3544-4130-91d6-98437108d9a3","type":"Panel"}],"root_ids":["b58d0508-d94e-4b67-a341-eeb47e185a96"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"6d24bc46-ddaf-4e72-81e2-a099f0053206","elementid":"052eb455-631e-45a6-9ec7-152b3666a75f","modelid":"b58d0508-d94e-4b67-a341-eeb47e185a96"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});