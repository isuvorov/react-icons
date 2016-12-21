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

var MdDns = function (_React$Component) {
    _inherits(MdDns, _React$Component);

    function MdDns() {
        _classCallCheck(this, MdDns);

        return _possibleConstructorReturn(this, (MdDns.__proto__ || Object.getPrototypeOf(MdDns)).apply(this, arguments));
    }

    _createClass(MdDns, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.6 15c1.8 0 3.4-1.6 3.4-3.4s-1.6-3.2-3.4-3.2-3.2 1.4-3.2 3.2 1.4 3.4 3.2 3.4z m21.8-10c0.9 0 1.6 0.7 1.6 1.6v10c0 1-0.7 1.8-1.6 1.8h-26.8c-0.9 0-1.6-0.8-1.6-1.8v-10c0-0.9 0.7-1.6 1.6-1.6h26.8z m-21.8 26.6c1.8 0 3.4-1.4 3.4-3.2s-1.6-3.4-3.4-3.4-3.2 1.6-3.2 3.4 1.4 3.2 3.2 3.2z m21.8-10c0.9 0 1.6 0.8 1.6 1.8v10c0 0.9-0.7 1.6-1.6 1.6h-26.8c-0.9 0-1.6-0.7-1.6-1.6v-10c0-1 0.7-1.8 1.6-1.8h26.8z' })
                )
            );
        }
    }]);

    return MdDns;
}(React.Component);

exports.default = MdDns;
module.exports = exports['default'];