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

var MdFormatColorFill = function (_React$Component) {
    _inherits(MdFormatColorFill, _React$Component);

    function MdFormatColorFill() {
        _classCallCheck(this, MdFormatColorFill);

        return _possibleConstructorReturn(this, (MdFormatColorFill.__proto__ || Object.getPrototypeOf(MdFormatColorFill)).apply(this, arguments));
    }

    _createClass(MdFormatColorFill, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm0 33.4h40v6.6h-40v-6.6z m31.6-14.3q3.4 3.7 3.4 5.9 0 1.3-1 2.3t-2.4 1.1-2.3-1.1-0.9-2.3q0-0.9 0.8-2.4t1.6-2.4z m-22.9-2.5h16l-8.1-7.9z m18.9-1.7q0.8 0.8 0.8 1.8t-0.8 1.7l-9.2 9.2q-0.7 0.8-1.8 0.8-0.9 0-1.7-0.8l-9.2-9.2q-0.8-0.7-0.8-1.7t0.8-1.8l8.6-8.6-4-4 2.4-2.3z' })
                )
            );
        }
    }]);

    return MdFormatColorFill;
}(React.Component);

exports.default = MdFormatColorFill;
module.exports = exports['default'];