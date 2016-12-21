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

var MdPresentToAll = function (_React$Component) {
    _inherits(MdPresentToAll, _React$Component);

    function MdPresentToAll() {
        _classCallCheck(this, MdPresentToAll);

        return _possibleConstructorReturn(this, (MdPresentToAll.__proto__ || Object.getPrototypeOf(MdPresentToAll)).apply(this, arguments));
    }

    _createClass(MdPresentToAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.6 20h-3.2l6.6-6.6 6.6 6.6h-3.2v6.6h-6.8v-6.6z m18.4 11.7v-23.4h-30v23.4h30z m0-26.7q1.4 0 2.4 1t1 2.4v23.2q0 1.4-1 2.4t-2.4 1h-30q-1.4 0-2.4-1t-1-2.4v-23.2q0-1.4 1-2.4t2.4-1h30z' })
                )
            );
        }
    }]);

    return MdPresentToAll;
}(React.Component);

exports.default = MdPresentToAll;
module.exports = exports['default'];