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

var MdDateRange = function (_React$Component) {
    _inherits(MdDateRange, _React$Component);

    function MdDateRange() {
        _classCallCheck(this, MdDateRange);

        return _possibleConstructorReturn(this, (MdDateRange.__proto__ || Object.getPrototypeOf(MdDateRange)).apply(this, arguments));
    }

    _createClass(MdDateRange, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 33.4v-18.4h-23.2v18.4h23.2z m0-26.8c1.8 0 3.4 1.6 3.4 3.4v23.4c0 1.8-1.6 3.2-3.4 3.2h-23.2c-1.9 0-3.4-1.4-3.4-3.2v-23.4c0-1.8 1.5-3.4 3.4-3.4h1.6v-3.2h3.4v3.2h13.2v-3.2h3.4v3.2h1.6z m-3.2 11.8v3.2h-3.4v-3.2h3.4z m-6.8 0v3.2h-3.2v-3.2h3.2z m-6.6 0v3.2h-3.4v-3.2h3.4z' })
                )
            );
        }
    }]);

    return MdDateRange;
}(React.Component);

exports.default = MdDateRange;
module.exports = exports['default'];