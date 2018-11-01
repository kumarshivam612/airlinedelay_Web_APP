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
      };var element = document.getElementById("7f20bdf3-9c1d-40c6-a6a8-dc7ef1ccc8ac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7f20bdf3-9c1d-40c6-a6a8-dc7ef1ccc8ac' but no matching script tag was found. ")
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
                  var docs_json = {"335e91ad-eac7-4d64-8030-f2cf734c0484":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c9dd57d-2dd0-415f-b649-25fad40c9a31","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"340f64ba-a45f-415e-b5b4-3d75471236bb","type":"Rect"},{"attributes":{"data_source":{"id":"c4041006-3c55-4594-963d-7ea8292007ed","type":"ColumnDataSource"},"glyph":{"id":"e7e89378-e7ed-461d-96e7-3356a2629eff","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3ddafa5b-6b0d-4698-a8f7-29a9aeab026b","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b64c67fd-8e5b-46f9-bd18-e77f453d41ab","type":"BoxAnnotation"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"b8557593-c84b-47f0-81df-a14d650e7054","type":"LinearColorMapper"},{"attributes":{},"id":"541a691a-36b6-4e0e-b7c5-e41d1cf09105","type":"BasicTicker"},{"attributes":{},"id":"391b3d45-3a37-47c6-bc65-7a04fb70693a","type":"BasicTicker"},{"attributes":{"data_source":{"id":"cf3b2394-64b4-4c29-a2ba-94af8f87ba7d","type":"ColumnDataSource"},"glyph":{"id":"cba246ae-9ceb-4c24-845f-19f0a47d521f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8f11b43b-d63f-44e9-ba77-3955e472fd35","type":"GlyphRenderer"},{"attributes":{},"id":"5a5c7a67-76d9-4e9a-a0ca-93e10a17dce2","type":"CategoricalTicker"},{"attributes":{"overlay":{"id":"ef788926-50e3-430c-88bc-d59dbc4c70b1","type":"BoxAnnotation"},"plot":{"id":"2279ec82-d7d3-4fdb-b153-c0abddf09a18","subtype":"Chart","type":"Plot"}},"id":"30422bbe-6747-4583-b7ae-39e2e8590e2b","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"12a3b94e-7047-4937-bc4c-238885edda40","type":"ColumnDataSource"},"glyph":{"id":"f9abe7dd-6e87-4797-88f1-12dad7ce87e4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0012cb5f-4a1c-4c44-8000-5142017752af","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"c2f4ad57-30d6-4e98-bf1b-6cefff91c07c","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2279ec82-d7d3-4fdb-b153-c0abddf09a18","subtype":"Chart","type":"Plot"},"ticker":{"id":"5a5c7a67-76d9-4e9a-a0ca-93e10a17dce2","type":"CategoricalTicker"}},"id":"9f71d9c5-1074-4848-aab8-fb56126f625d","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"d43f3177-ea2e-4e87-a409-bfa0210a5c17","subtype":"Chart","type":"Plot"}},"id":"66be0923-e034-4938-8461-5618ba6db266","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"88f3e391-19b8-4812-8231-289649821061","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"730d7233-39ae-4b95-a566-4f767d4dabf4","type":"Rect"},{"attributes":{"child":{"id":"2279ec82-d7d3-4fdb-b153-c0abddf09a18","subtype":"Chart","type":"Plot"},"title":"UA"},"id":"06964f21-3455-488d-8256-d7926097539c","type":"Panel"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"8be489aa-e201-4056-ba7d-c2a6f486edb8","type":"LinearAxis"}],"left":[{"id":"9f71d9c5-1074-4848-aab8-fb56126f625d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ef788926-50e3-430c-88bc-d59dbc4c70b1","type":"BoxAnnotation"},{"id":"8f11b43b-d63f-44e9-ba77-3955e472fd35","type":"GlyphRenderer"},{"id":"607a1345-9d3e-4720-b8ba-f2d7043dd631","type":"GlyphRenderer"},{"id":"b1f2a6b4-b69d-4d86-b04a-5bf6faa2a11c","type":"GlyphRenderer"},{"id":"3ddafa5b-6b0d-4698-a8f7-29a9aeab026b","type":"GlyphRenderer"},{"id":"161f8b86-e1a8-4732-a92c-28caedefb7f0","type":"GlyphRenderer"},{"id":"40cd82ca-cc5f-440f-bfa0-b3ca09f4e7ba","type":"GlyphRenderer"},{"id":"0fb3ae88-a973-44b1-bce8-3b573e0deb7e","type":"GlyphRenderer"},{"id":"62241bf3-8d82-4dea-9536-26f406cc7da2","type":"GlyphRenderer"},{"id":"9a9d885f-5b52-4d91-baca-6de050142148","type":"GlyphRenderer"},{"id":"8be489aa-e201-4056-ba7d-c2a6f486edb8","type":"LinearAxis"},{"id":"9f71d9c5-1074-4848-aab8-fb56126f625d","type":"CategoricalAxis"},{"id":"fd7a86a2-b5e2-45d0-b926-cef64aa1b821","type":"ColorBar"}],"right":[{"id":"fd7a86a2-b5e2-45d0-b926-cef64aa1b821","type":"ColorBar"}],"title":{"id":"6fcc5e5f-ee99-4d8c-bdbc-2833ae1d3fd2","type":"Title"},"tool_events":{"id":"abce8cde-f15e-41c6-a174-c14664f49e26","type":"ToolEvents"},"toolbar":{"id":"2ff6e73e-3b41-4878-90e0-4a501112b6d6","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"08b70022-57d9-45e6-9039-cf8274cd06ae","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"699d5257-3049-464a-bc32-d8b444d6a6aa","type":"FactorRange"}},"id":"2279ec82-d7d3-4fdb-b153-c0abddf09a18","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"042c8f31-916f-4b87-8412-d7052f99d646","type":"ColumnDataSource"},"glyph":{"id":"f1f5d8a4-da86-4188-9c50-0a33e6e6770b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"40cd82ca-cc5f-440f-bfa0-b3ca09f4e7ba","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3]"}],"values":[0.0],"x":[13],"y":["Saturday"]}},"id":"998cbede-f4ed-4a31-aebd-1e952eb53c3e","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"afaf44a2-0779-44da-a5eb-a43ac5fbf116","type":"LinearAxis"}],"left":[{"id":"bc4f9d1f-d2c0-41c6-a367-04ee76e55cb7","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"b64c67fd-8e5b-46f9-bd18-e77f453d41ab","type":"BoxAnnotation"},{"id":"90d4ca8f-8859-4e85-be47-ef38ed472fd3","type":"GlyphRenderer"},{"id":"3416fd52-1f9d-4eee-b5c5-9c99b8165404","type":"GlyphRenderer"},{"id":"a9d93fbf-6411-4ba2-8d8d-8e941872166f","type":"GlyphRenderer"},{"id":"2bdc5b20-a93a-4158-aec0-92d96b33b00d","type":"GlyphRenderer"},{"id":"e7eda7ec-8959-47eb-83a7-07854a6c8734","type":"GlyphRenderer"},{"id":"ad8b32ad-3b67-4a23-b2f0-65d8e1eb7647","type":"GlyphRenderer"},{"id":"fdd9efe7-7c81-453c-b2f5-bfabd8359086","type":"GlyphRenderer"},{"id":"0012cb5f-4a1c-4c44-8000-5142017752af","type":"GlyphRenderer"},{"id":"1e823636-6d6b-445f-ab75-e014acc1b3dd","type":"GlyphRenderer"},{"id":"afaf44a2-0779-44da-a5eb-a43ac5fbf116","type":"LinearAxis"},{"id":"bc4f9d1f-d2c0-41c6-a367-04ee76e55cb7","type":"CategoricalAxis"},{"id":"04b5d95a-1b6a-4f86-b709-c239d76a6769","type":"ColorBar"}],"right":[{"id":"04b5d95a-1b6a-4f86-b709-c239d76a6769","type":"ColorBar"}],"title":{"id":"76d171be-da1b-47c7-8e87-33a15860f04a","type":"Title"},"tool_events":{"id":"7bd4ccec-b134-492a-ad33-aa723ca07dc3","type":"ToolEvents"},"toolbar":{"id":"522c45ea-aa38-40b5-b8c5-3dc0e03e0192","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"d5aaa64a-6d46-4115-ab8d-70cd77023346","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5c44d74c-7d7d-48a3-98fc-9f2ecee3f425","type":"FactorRange"}},"id":"d43f3177-ea2e-4e87-a409-bfa0210a5c17","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"ea705be6-97e6-4414-b558-d9887312c2e8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]"],"chart_index":[{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"}],"values":[11.476190476190476,11.566666666666666,11.10344827586207,10.96551724137931,9.625,9.75,9.61111111111111,10.074074074074074,9.533333333333333,9.641509433962264],"x":[16,22,22,21,23,15,23,21,16,22],"y":["Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"21957be7-4b4b-4ea2-977b-3ef1d38409a0","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3da68ffd-2c22-48d5-ac4e-23355c4f000a","type":"Rect"},{"attributes":{"data_source":{"id":"3b806672-7e73-4abb-927e-ab8bc0d7ad0e","type":"ColumnDataSource"},"glyph":{"id":"90c9d903-48b9-442a-abe4-a3e32415680d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a9d93fbf-6411-4ba2-8d8d-8e941872166f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d43f3177-ea2e-4e87-a409-bfa0210a5c17","subtype":"Chart","type":"Plot"}},"id":"d074077d-c3a6-4167-ab58-6f3fd2db18c2","type":"PanTool"},{"attributes":{"plot":{"id":"2279ec82-d7d3-4fdb-b153-c0abddf09a18","subtype":"Chart","type":"Plot"}},"id":"7b33e1ac-9d4c-42e9-ac08-bc86acdfc364","type":"ResetTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"57c759d3-55f9-429e-b3a2-14a96d966e28","type":"BasicTickFormatter"},"plot":{"id":"2279ec82-d7d3-4fdb-b153-c0abddf09a18","subtype":"Chart","type":"Plot"},"ticker":{"id":"541a691a-36b6-4e0e-b7c5-e41d1cf09105","type":"BasicTicker"}},"id":"8be489aa-e201-4056-ba7d-c2a6f486edb8","type":"LinearAxis"},{"attributes":{},"id":"9593af5a-628a-46b4-acb4-4b4d47eb7837","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2629ea1f-d838-4700-ac29-8c779b6e72f4","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8f34684-97fd-4920-993f-c98171335ab2","type":"Rect"},{"attributes":{"data_source":{"id":"fe0b52d3-b6ab-4642-a77e-170ede414795","type":"ColumnDataSource"},"glyph":{"id":"14c6a81b-a6c2-44e3-aef5-141a27fcbbe7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"62241bf3-8d82-4dea-9536-26f406cc7da2","type":"GlyphRenderer"},{"attributes":{},"id":"873432cd-0513-4d9f-91a6-0dce25931574","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12, 15]","(12, 15]","(12, 15]","(12, 15]","(12, 15]","(12, 15]","(12, 15]","(12, 15]","(12, 15]","(12, 15]"],"chart_index":[{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"}],"values":[14.6,13.6,13.7,12.88888888888889,13.875,12.945945945945946,12.0,13.424242424242424,13.206896551724139,14.333333333333334],"x":[13,13,15,23,15,16,22,16,21,14],"y":["Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday","Saturday"]}},"id":"9988548b-09a6-48ac-8ba8-de7e49ed8bdc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3207d1b6-aafa-455b-b891-de211fe86498","type":"ColumnDataSource"},"glyph":{"id":"b87fade1-4d27-4965-ad91-67b681051be7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0fb3ae88-a973-44b1-bce8-3b573e0deb7e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"998cbede-f4ed-4a31-aebd-1e952eb53c3e","type":"ColumnDataSource"},"glyph":{"id":"3da68ffd-2c22-48d5-ac4e-23355c4f000a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1e823636-6d6b-445f-ab75-e014acc1b3dd","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"bffc595c-1022-4a72-85fe-fb850ac67167","type":"BasicTickFormatter"},"plot":{"id":"d43f3177-ea2e-4e87-a409-bfa0210a5c17","subtype":"Chart","type":"Plot"},"ticker":{"id":"03e97a6d-c0a3-44c5-9236-190fe50fd78f","type":"BasicTicker"}},"id":"afaf44a2-0779-44da-a5eb-a43ac5fbf116","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(15, 18]","(15, 18]","(15, 18]"],"chart_index":[{"POS_ARR_DELAY":"(15, 18]"},{"POS_ARR_DELAY":"(15, 18]"},{"POS_ARR_DELAY":"(15, 18]"}],"values":[15.947368421052632,16.72972972972973,16.555555555555557],"x":[23,16,15],"y":["Monday","Wednesday","Saturday"]}},"id":"c4041006-3c55-4594-963d-7ea8292007ed","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12, 15]","(12, 15]","(12, 15]","(12, 15]","(12, 15]","(12, 15]","(12, 15]","(12, 15]","(12, 15]","(12, 15]"],"chart_index":[{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"},{"POS_ARR_DELAY":"(12, 15]"}],"values":[14.6,13.6,13.7,12.88888888888889,13.875,12.945945945945946,12.0,13.424242424242424,13.206896551724139,14.333333333333334],"x":[13,13,15,23,15,16,22,16,21,14],"y":["Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday","Saturday"]}},"id":"09a09479-fa3f-499f-a413-84ceed664899","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"08b70022-57d9-45e6-9039-cf8274cd06ae","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(24, 27]"],"chart_index":[{"POS_ARR_DELAY":"(24, 27]"}],"values":[26.96],"x":[15],"y":["Monday"]}},"id":"1fa0c567-d86c-4db2-adc7-ae9ef734eb5d","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e7e89378-e7ed-461d-96e7-3356a2629eff","type":"Rect"},{"attributes":{},"id":"61887eaf-8ed2-4dda-8016-893d97e8cce9","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(15, 18]","(15, 18]","(15, 18]"],"chart_index":[{"POS_ARR_DELAY":"(15, 18]"},{"POS_ARR_DELAY":"(15, 18]"},{"POS_ARR_DELAY":"(15, 18]"}],"values":[15.947368421052632,16.72972972972973,16.555555555555557],"x":[23,16,15],"y":["Monday","Wednesday","Saturday"]}},"id":"2235333b-9eb3-427a-a06a-2edf0b13d62b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d43f3177-ea2e-4e87-a409-bfa0210a5c17","subtype":"Chart","type":"Plot"}},"id":"e1e3ad38-fc7b-425e-b3b5-11f30a0d8564","type":"SaveTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"66d47f12-5822-44fa-ba84-fcb7f60343f1","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d43f3177-ea2e-4e87-a409-bfa0210a5c17","subtype":"Chart","type":"Plot"},"ticker":{"id":"61887eaf-8ed2-4dda-8016-893d97e8cce9","type":"CategoricalTicker"}},"id":"bc4f9d1f-d2c0-41c6-a367-04ee76e55cb7","type":"CategoricalAxis"},{"attributes":{"child":{"id":"d43f3177-ea2e-4e87-a409-bfa0210a5c17","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"9effed9c-6189-496a-9257-e4a318b5d11d","type":"Panel"},{"attributes":{"data_source":{"id":"09a09479-fa3f-499f-a413-84ceed664899","type":"ColumnDataSource"},"glyph":{"id":"41e5f187-682b-465d-8f13-d3e6982d915b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"161f8b86-e1a8-4732-a92c-28caedefb7f0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]"],"chart_index":[{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"}],"values":[11.476190476190476,11.566666666666666,11.10344827586207,10.96551724137931,9.625,9.75,9.61111111111111,10.074074074074074,9.533333333333333,9.641509433962264],"x":[16,22,22,21,23,15,23,21,16,22],"y":["Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"042c8f31-916f-4b87-8412-d7052f99d646","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"b8557593-c84b-47f0-81df-a14d650e7054","type":"LinearColorMapper"},"formatter":{"id":"ea705be6-97e6-4414-b558-d9887312c2e8","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"2279ec82-d7d3-4fdb-b153-c0abddf09a18","subtype":"Chart","type":"Plot"},"ticker":{"id":"9593af5a-628a-46b4-acb4-4b4d47eb7837","type":"BasicTicker"}},"id":"fd7a86a2-b5e2-45d0-b926-cef64aa1b821","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1f5d8a4-da86-4188-9c50-0a33e6e6770b","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"5c44d74c-7d7d-48a3-98fc-9f2ecee3f425","type":"FactorRange"},{"attributes":{"data_source":{"id":"a18e5ab8-eca4-40ff-9abc-cc2925d36aff","type":"ColumnDataSource"},"glyph":{"id":"730d7233-39ae-4b95-a566-4f767d4dabf4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3416fd52-1f9d-4eee-b5c5-9c99b8165404","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cba246ae-9ceb-4c24-845f-19f0a47d521f","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]"],"chart_index":[{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"}],"values":[6.888888888888889,8.655172413793103,8.894736842105264,6.666666666666667,8.452830188679245,8.777777777777779,7.866666666666666],"x":[15,21,22,16,22,15,23],"y":["Tuesday","Tuesday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"3207d1b6-aafa-455b-b891-de211fe86498","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(24, 27]"],"chart_index":[{"POS_ARR_DELAY":"(24, 27]"}],"values":[26.96],"x":[15],"y":["Monday"]}},"id":"cf3b2394-64b4-4c29-a2ba-94af8f87ba7d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"21957be7-4b4b-4ea2-977b-3ef1d38409a0","type":"ColumnDataSource"},"glyph":{"id":"c818741e-1244-4285-9da0-36928c12b9dd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ad8b32ad-3b67-4a23-b2f0-65d8e1eb7647","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d43f3177-ea2e-4e87-a409-bfa0210a5c17","subtype":"Chart","type":"Plot"}},"id":"f1e41509-c7c3-4cee-abc6-907e054d3891","type":"ResetTool"},{"attributes":{"data_source":{"id":"f344ca11-95e0-4263-a5b2-08771107ff18","type":"ColumnDataSource"},"glyph":{"id":"2629ea1f-d838-4700-ac29-8c779b6e72f4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9a9d885f-5b52-4d91-baca-6de050142148","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"76d171be-da1b-47c7-8e87-33a15860f04a","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ef788926-50e3-430c-88bc-d59dbc4c70b1","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(18, 21]","(18, 21]"],"chart_index":[{"POS_ARR_DELAY":"(18, 21]"},{"POS_ARR_DELAY":"(18, 21]"}],"values":[20.454545454545453,18.77777777777778],"x":[22,23],"y":["Monday","Tuesday"]}},"id":"3b806672-7e73-4abb-927e-ab8bc0d7ad0e","type":"ColumnDataSource"},{"attributes":{},"id":"03e97a6d-c0a3-44c5-9236-190fe50fd78f","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"90c9d903-48b9-442a-abe4-a3e32415680d","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd69d3a1-b1fe-47cc-b9d5-ade4a6feb2d2","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(21, 24]"],"chart_index":[{"POS_ARR_DELAY":"(21, 24]"}],"values":[20.975],"x":[16],"y":["Monday"]}},"id":"42387d0e-6887-420d-b24b-73acf17a9097","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"2279ec82-d7d3-4fdb-b153-c0abddf09a18","subtype":"Chart","type":"Plot"}},"id":"7ea37f3f-2057-4003-9688-3bf387df2feb","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"41e5f187-682b-465d-8f13-d3e6982d915b","type":"Rect"},{"attributes":{},"id":"7bd4ccec-b134-492a-ad33-aa723ca07dc3","type":"ToolEvents"},{"attributes":{"data_source":{"id":"117b7125-d88f-4398-8b3e-b6f8173406ab","type":"ColumnDataSource"},"glyph":{"id":"dd69d3a1-b1fe-47cc-b9d5-ade4a6feb2d2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fdd9efe7-7c81-453c-b2f5-bfabd8359086","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1fa0c567-d86c-4db2-adc7-ae9ef734eb5d","type":"ColumnDataSource"},"glyph":{"id":"f5603baa-5b3a-459e-85d6-728dbfe6c1fd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"90d4ca8f-8859-4e85-be47-ef38ed472fd3","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"9988548b-09a6-48ac-8ba8-de7e49ed8bdc","type":"ColumnDataSource"},"glyph":{"id":"6c9dd57d-2dd0-415f-b649-25fad40c9a31","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e7eda7ec-8959-47eb-83a7-07854a6c8734","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b87fade1-4d27-4965-ad91-67b681051be7","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"efea26a2-66b0-4333-a43a-280766bce18b","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(18, 21]","(18, 21]"],"chart_index":[{"POS_ARR_DELAY":"(18, 21]"},{"POS_ARR_DELAY":"(18, 21]"}],"values":[20.454545454545453,18.77777777777778],"x":[22,23],"y":["Monday","Tuesday"]}},"id":"70fd56d5-9259-436a-9506-aee707817c57","type":"ColumnDataSource"},{"attributes":{},"id":"bffc595c-1022-4a72-85fe-fb850ac67167","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"42387d0e-6887-420d-b24b-73acf17a9097","type":"ColumnDataSource"},"glyph":{"id":"88f3e391-19b8-4812-8231-289649821061","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"607a1345-9d3e-4720-b8ba-f2d7043dd631","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c818741e-1244-4285-9da0-36928c12b9dd","type":"Rect"},{"attributes":{"color_mapper":{"id":"efea26a2-66b0-4333-a43a-280766bce18b","type":"LinearColorMapper"},"formatter":{"id":"873432cd-0513-4d9f-91a6-0dce25931574","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"d43f3177-ea2e-4e87-a409-bfa0210a5c17","subtype":"Chart","type":"Plot"},"ticker":{"id":"391b3d45-3a37-47c6-bc65-7a04fb70693a","type":"BasicTicker"}},"id":"04b5d95a-1b6a-4f86-b709-c239d76a6769","type":"ColorBar"},{"attributes":{},"id":"57c759d3-55f9-429e-b3a2-14a96d966e28","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d43f3177-ea2e-4e87-a409-bfa0210a5c17","subtype":"Chart","type":"Plot"}},"id":"cfb60c71-eaa2-49ac-81f3-32b578a88c94","type":"HelpTool"},{"attributes":{"plot":{"id":"2279ec82-d7d3-4fdb-b153-c0abddf09a18","subtype":"Chart","type":"Plot"}},"id":"e0e843dc-fb99-45c8-b187-eccac6620696","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(21, 24]"],"chart_index":[{"POS_ARR_DELAY":"(21, 24]"}],"values":[20.975],"x":[16],"y":["Monday"]}},"id":"a18e5ab8-eca4-40ff-9abc-cc2925d36aff","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"14c6a81b-a6c2-44e3-aef5-141a27fcbbe7","type":"Rect"},{"attributes":{},"id":"c2f4ad57-30d6-4e98-bf1b-6cefff91c07c","type":"CategoricalTickFormatter"},{"attributes":{},"id":"abce8cde-f15e-41c6-a174-c14664f49e26","type":"ToolEvents"},{"attributes":{"callback":null,"end":23},"id":"d5aaa64a-6d46-4115-ab8d-70cd77023346","type":"Range1d"},{"attributes":{"data_source":{"id":"70fd56d5-9259-436a-9506-aee707817c57","type":"ColumnDataSource"},"glyph":{"id":"c8f34684-97fd-4920-993f-c98171335ab2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b1f2a6b4-b69d-4d86-b04a-5bf6faa2a11c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"2279ec82-d7d3-4fdb-b153-c0abddf09a18","subtype":"Chart","type":"Plot"}},"id":"da9e216e-84ad-4d34-b531-ddc0c82a3f18","type":"HelpTool"},{"attributes":{},"id":"66d47f12-5822-44fa-ba84-fcb7f60343f1","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"2279ec82-d7d3-4fdb-b153-c0abddf09a18","subtype":"Chart","type":"Plot"}},"id":"b73d125a-eaee-4b41-bd23-f2ad28c08936","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f9abe7dd-6e87-4797-88f1-12dad7ce87e4","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]"],"chart_index":[{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"}],"values":[6.888888888888889,8.655172413793103,8.894736842105264,6.666666666666667,8.452830188679245,8.777777777777779,7.866666666666666],"x":[15,21,22,16,22,15,23],"y":["Tuesday","Tuesday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"117b7125-d88f-4398-8b3e-b6f8173406ab","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3]"}],"values":[0.0],"x":[13],"y":["Saturday"]}},"id":"f344ca11-95e0-4263-a5b2-08771107ff18","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]"],"chart_index":[{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"}],"values":[5.344827586206897,4.833333333333333,3.6,3.0,5.586206896551724],"x":[21,21,13,23,21],"y":["Monday","Wednesday","Thursday","Saturday","Sunday"]}},"id":"fe0b52d3-b6ab-4642-a77e-170ede414795","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b73d125a-eaee-4b41-bd23-f2ad28c08936","type":"PanTool"},{"id":"e0e843dc-fb99-45c8-b187-eccac6620696","type":"WheelZoomTool"},{"id":"30422bbe-6747-4583-b7ae-39e2e8590e2b","type":"BoxZoomTool"},{"id":"7ea37f3f-2057-4003-9688-3bf387df2feb","type":"SaveTool"},{"id":"7b33e1ac-9d4c-42e9-ac08-bc86acdfc364","type":"ResetTool"},{"id":"da9e216e-84ad-4d34-b531-ddc0c82a3f18","type":"HelpTool"}]},"id":"2ff6e73e-3b41-4878-90e0-4a501112b6d6","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]"],"chart_index":[{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"}],"values":[5.344827586206897,4.833333333333333,3.6,3.0,5.586206896551724],"x":[21,21,13,23,21],"y":["Monday","Wednesday","Thursday","Saturday","Sunday"]}},"id":"12a3b94e-7047-4937-bc4c-238885edda40","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"699d5257-3049-464a-bc32-d8b444d6a6aa","type":"FactorRange"},{"attributes":{"plot":null,"text":"United Air Lines "},"id":"6fcc5e5f-ee99-4d8c-bdbc-2833ae1d3fd2","type":"Title"},{"attributes":{"callback":null,"tabs":[{"id":"9effed9c-6189-496a-9257-e4a318b5d11d","type":"Panel"},{"id":"06964f21-3455-488d-8256-d7926097539c","type":"Panel"}]},"id":"5e60cf70-7977-4f75-9ee3-4db008ce6f96","type":"Tabs"},{"attributes":{"data_source":{"id":"2235333b-9eb3-427a-a06a-2edf0b13d62b","type":"ColumnDataSource"},"glyph":{"id":"340f64ba-a45f-415e-b5b4-3d75471236bb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2bdc5b20-a93a-4158-aec0-92d96b33b00d","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d074077d-c3a6-4167-ab58-6f3fd2db18c2","type":"PanTool"},{"id":"66be0923-e034-4938-8461-5618ba6db266","type":"WheelZoomTool"},{"id":"80e68cd7-2169-47e6-b260-9d182cf85665","type":"BoxZoomTool"},{"id":"e1e3ad38-fc7b-425e-b3b5-11f30a0d8564","type":"SaveTool"},{"id":"f1e41509-c7c3-4cee-abc6-907e054d3891","type":"ResetTool"},{"id":"cfb60c71-eaa2-49ac-81f3-32b578a88c94","type":"HelpTool"}]},"id":"522c45ea-aa38-40b5-b8c5-3dc0e03e0192","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f5603baa-5b3a-459e-85d6-728dbfe6c1fd","type":"Rect"},{"attributes":{"overlay":{"id":"b64c67fd-8e5b-46f9-bd18-e77f453d41ab","type":"BoxAnnotation"},"plot":{"id":"d43f3177-ea2e-4e87-a409-bfa0210a5c17","subtype":"Chart","type":"Plot"}},"id":"80e68cd7-2169-47e6-b260-9d182cf85665","type":"BoxZoomTool"}],"root_ids":["5e60cf70-7977-4f75-9ee3-4db008ce6f96"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"335e91ad-eac7-4d64-8030-f2cf734c0484","elementid":"7f20bdf3-9c1d-40c6-a6a8-dc7ef1ccc8ac","modelid":"5e60cf70-7977-4f75-9ee3-4db008ce6f96"}];
                  
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