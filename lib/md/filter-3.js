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

var MdFilter3 = function (_React$Component) {
    _inherits(MdFilter3, _React$Component);

    function MdFilter3() {
        _classCallCheck(this, MdFilter3);

        return _possibleConstructorReturn(this, (MdFilter3.__proto__ || Object.getPrototypeOf(MdFilter3)).apply(this, arguments));
    }

    _createClass(MdFilter3, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 21.6c0 1.9-1.6 3.4-3.4 3.4h-6.6v-3.4h6.6v-3.2h-3.4v-3.4h3.4v-3.4h-6.6v-3.2h6.6c1.8 0 3.4 1.4 3.4 3.2v2.5c0 1.4-1.1 2.5-2.5 2.5 1.4 0 2.5 1.1 2.5 2.5v2.5z m-23.4-13.2v26.6h26.6v3.4h-26.6c-1.8 0-3.4-1.6-3.4-3.4v-26.6h3.4z m30 20v-23.4h-23.4v23.4h23.4z m0-26.8c1.8 0 3.4 1.6 3.4 3.4v23.4c0 1.8-1.6 3.2-3.4 3.2h-23.4c-1.8 0-3.2-1.4-3.2-3.2v-23.4c0-1.8 1.4-3.4 3.2-3.4h23.4z' })
                )
            );
        }
    }]);

    return MdFilter3;
}(React.Component);

exports.default = MdFilter3;
module.exports = exports['default'];