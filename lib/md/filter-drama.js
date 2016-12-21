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

var MdFilterDrama = function (_React$Component) {
    _inherits(MdFilterDrama, _React$Component);

    function MdFilterDrama() {
        _classCallCheck(this, MdFilterDrama);

        return _possibleConstructorReturn(this, (MdFilterDrama.__proto__ || Object.getPrototypeOf(MdFilterDrama)).apply(this, arguments));
    }

    _createClass(MdFilterDrama, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 30c2.8 0 5-2.3 5-5s-2.2-5-5-5h-2.5v-0.9c0-5-4-9.1-9.1-9.1-3 0-5.6 1.4-7.3 3.7 4.2 1.1 7.3 5.1 7.3 9.7h-3.4c0-3.7-2.9-6.8-6.6-6.8s-6.6 3.1-6.6 6.8 2.9 6.6 6.6 6.6h21.6z m0.7-13.3c4.3 0.3 7.7 3.9 7.7 8.3 0 4.6-3.7 8.4-8.4 8.4h-21.6c-5.5 0-10-4.5-10-10 0-5.2 3.9-9.4 8.9-10 2.1-3.9 6.3-6.8 11.1-6.8 6.1 0 11.1 4.3 12.3 10.1z' })
                )
            );
        }
    }]);

    return MdFilterDrama;
}(React.Component);

exports.default = MdFilterDrama;
module.exports = exports['default'];