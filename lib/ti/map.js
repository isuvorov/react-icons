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

var TiMap = function (_React$Component) {
    _inherits(TiMap, _React$Component);

    function TiMap() {
        _classCallCheck(this, TiMap);

        return _possibleConstructorReturn(this, (TiMap.__proto__ || Object.getPrototypeOf(TiMap)).apply(this, arguments));
    }

    _createClass(TiMap, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34 5.1c-0.6-0.2-1.4-0.1-1.8 0.4l-6.5 6.4-7.2-5.7c-0.6-0.5-1.6-0.5-2.2 0.1l-7.5 7.5c-0.3 0.3-0.5 0.8-0.5 1.2v16.7c0 0.6 0.4 1.3 1.1 1.5 0.2 0.1 0.4 0.1 0.6 0.1 0.4 0 0.9-0.1 1.2-0.5l6.4-6.4 7.2 5.7c0.7 0.6 1.6 0.5 2.2-0.1l7.5-7.5c0.3-0.3 0.5-0.7 0.5-1.2v-16.6c0-0.7-0.4-1.3-1-1.6z m-22.3 22.5v-11.9l5-5v12.1c-0.1 0-5 4.8-5 4.8z m6.8-4.7c0-0.1-0.1-0.1-0.2-0.1v-12.5s6.6 5.2 6.7 5.3v12.4l-6.5-5.1z m13.2-0.3l-5 5v-12c0.1-0.1 5-4.9 5-4.9v11.9z' })
                )
            );
        }
    }]);

    return TiMap;
}(React.Component);

exports.default = TiMap;
module.exports = exports['default'];