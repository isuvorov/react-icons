'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiPipette = function (_React$Component) {
    _inherits(TiPipette, _React$Component);

    function TiPipette() {
        _classCallCheck(this, TiPipette);

        return _possibleConstructorReturn(this, (TiPipette.__proto__ || Object.getPrototypeOf(TiPipette)).apply(this, arguments));
    }

    _createClass(TiPipette, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.6 12.2c0.2-2-0.6-4-1.9-5.3-1.2-1.2-3-1.9-4.8-1.9-2 0-3.7 0.8-4.7 2.1-1.2 1.4-2.4 4.3-3 6.1l-2.7-2.7c-0.6-0.7-1.7-0.7-2.3 0-0.7 0.6-0.7 1.7 0 2.3l0.5 0.5-8.8 8.7c-0.6 0.6-1.2 1.5-1.6 2.5 0 0.1-2.8 7.3-0.1 10 0.9 0.9 2.2 1.2 3.6 1.2 3 0 6.3-1.4 6.3-1.4 1-0.4 1.9-1 2.5-1.6l8.8-8.7 0.4 0.5c0.4 0.3 0.8 0.5 1.2 0.5s0.9-0.2 1.2-0.5c0.6-0.7 0.6-1.7 0-2.4l-2.7-2.7c1.7-0.6 4.6-1.8 6.1-2.9 1.2-1 1.9-2.5 2-4.3z m-27.1 19.9c-0.4-0.5-0.1-2.5 0.3-4.3l4 4.1c-1.8 0.4-3.8 0.6-4.3 0.2z m7.8-1.7c-0.3 0.3-0.9 0.6-1.5 0.8 0 0.1-0.1 0.1-0.2 0.1l-5.3-5.3c0.1 0 0.1-0.1 0.1-0.2 0.3-0.6 0.6-1.1 0.9-1.4l8.7-8.7 6 5.9-8.7 8.8z' })
                )
            );
        }
    }]);

    return TiPipette;
}(React.Component);

exports.default = TiPipette;
module.exports = exports['default'];