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

var MdLaptop = function (_React$Component) {
    _inherits(MdLaptop, _React$Component);

    function MdLaptop() {
        _classCallCheck(this, MdLaptop);

        return _possibleConstructorReturn(this, (MdLaptop.__proto__ || Object.getPrototypeOf(MdLaptop)).apply(this, arguments));
    }

    _createClass(MdLaptop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.6 10v16.6h26.8v-16.6h-26.8z m26.8 20h6.6v3.4h-40v-3.4h6.6c-1.8 0-3.2-1.6-3.2-3.4v-16.6c0-1.8 1.4-3.4 3.2-3.4h26.8c1.8 0 3.2 1.6 3.2 3.4v16.6c0 1.8-1.4 3.4-3.2 3.4z' })
                )
            );
        }
    }]);

    return MdLaptop;
}(React.Component);

exports.default = MdLaptop;
module.exports = exports['default'];