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

var MdNfc = function (_React$Component) {
    _inherits(MdNfc, _React$Component);

    function MdNfc() {
        _classCallCheck(this, MdNfc);

        return _possibleConstructorReturn(this, (MdNfc.__proto__ || Object.getPrototypeOf(MdNfc)).apply(this, arguments));
    }

    _createClass(MdNfc, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 10v20h-20v-20h6.6v3.4h-3.2v13.2h13.2v-13.2h-5v3.7c1.1 0.6 1.8 1.7 1.8 2.9 0 1.8-1.6 3.4-3.4 3.4s-3.4-1.6-3.4-3.4c0-1.2 0.7-2.3 1.8-2.9v-3.7c0-1.8 1.4-3.4 3.2-3.4h8.4z m3.4 23.4v-26.8h-26.8v26.8h26.8z m0-30c1.8 0 3.2 1.4 3.2 3.2v26.8c0 1.8-1.4 3.2-3.2 3.2h-26.8c-1.8 0-3.2-1.4-3.2-3.2v-26.8c0-1.8 1.4-3.2 3.2-3.2h26.8z' })
                )
            );
        }
    }]);

    return MdNfc;
}(React.Component);

exports.default = MdNfc;
module.exports = exports['default'];