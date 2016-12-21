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

var IoPricetags = function (_React$Component) {
    _inherits(IoPricetags, _React$Component);

    function IoPricetags() {
        _classCallCheck(this, IoPricetags);

        return _possibleConstructorReturn(this, (IoPricetags.__proto__ || Object.getPrototypeOf(IoPricetags)).apply(this, arguments));
    }

    _createClass(IoPricetags, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.4 18.7c0.8 0.8 0.8 2.2 0 3l-2.3 2.3c0.9-0.9 0.8-2.2 0-3.1l-14.9-15h-0.1c-0.6-0.5-1.2-0.9-2.1-0.9l-7-0.2h-0.3c-0.7 0-1.5 0.2-2.1 0.7l2.2-2.1c0.6-0.6 1.3-0.9 2.1-0.9h0.3l7.1 0.3c0.8 0 1.4 0.3 2.1 0.9h0.1l0 0.1 14.9 14.9z m-3.5 3.3c0.9 0.9 0.9 2.3 0 3.2l-8.4 8.5v-0.1l-2 2.1-1.2 1.2c-0.8 0.8-2 0.8-2.9 0.1l-0.2-0.3-14.9-15.1c-0.4-0.4-0.8-1.1-0.8-1.7v-0.1l-0.5-6.9v-0.3c0-0.9 0.3-1.7 0.9-2.3l3.6-3.7c0.6-0.4 1.4-0.7 2.1-0.7h0.3l7 0.3c0.9 0 1.5 0.3 2.1 0.8l0.2 0.1 14.7 14.9z m-24.7-11.1c-1 0.7-1.7 1.7-1.7 2.9 0 1.9 1.5 3.4 3.4 3.4 1.2 0 2.3-0.7 2.9-1.7 0.3-0.5 0.5-1 0.5-1.7 0-1.8-1.5-3.4-3.4-3.4-0.6 0-1.2 0.2-1.7 0.5z' })
                )
            );
        }
    }]);

    return IoPricetags;
}(React.Component);

exports.default = IoPricetags;
module.exports = exports['default'];