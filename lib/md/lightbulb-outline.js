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

var MdLightbulbOutline = function (_React$Component) {
    _inherits(MdLightbulbOutline, _React$Component);

    function MdLightbulbOutline() {
        _classCallCheck(this, MdLightbulbOutline);

        return _possibleConstructorReturn(this, (MdLightbulbOutline.__proto__ || Object.getPrototypeOf(MdLightbulbOutline)).apply(this, arguments));
    }

    _createClass(MdLightbulbOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.8 21.8c2.2-1.6 3.6-4.1 3.6-6.8 0-4.6-3.8-8.4-8.4-8.4s-8.4 3.8-8.4 8.4c0 2.7 1.4 5.2 3.6 6.8l1.4 1v3.8h6.8v-3.8z m-4.8-18.4c6.4 0 11.6 5.2 11.6 11.6 0 4-1.9 7.4-5 9.5v3.9c0 0.9-0.7 1.6-1.6 1.6h-10c-0.9 0-1.6-0.7-1.6-1.6v-3.9c-3.1-2.1-5-5.5-5-9.5 0-6.4 5.2-11.6 11.6-11.6z m-5 31.6v-1.6h10v1.6c0 0.9-0.7 1.6-1.6 1.6h-6.8c-0.9 0-1.6-0.7-1.6-1.6z' })
                )
            );
        }
    }]);

    return MdLightbulbOutline;
}(React.Component);

exports.default = MdLightbulbOutline;
module.exports = exports['default'];