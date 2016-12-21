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

var FaObjectGroup = function (_React$Component) {
    _inherits(FaObjectGroup, _React$Component);

    function FaObjectGroup() {
        _classCallCheck(this, FaObjectGroup);

        return _possibleConstructorReturn(this, (FaObjectGroup.__proto__ || Object.getPrototypeOf(FaObjectGroup)).apply(this, arguments));
    }

    _createClass(FaObjectGroup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.8 10.1h-2.5v19.8h2.5v7.5h-7.5v-2.5h-24.8v2.5h-7.5v-7.5h2.5v-19.8h-2.5v-7.5h7.5v2.5h24.8v-2.5h7.5v7.5z m-5-5v2.5h2.5v-2.5h-2.5z m-32.3 0v2.5h2.5v-2.5h-2.5z m2.5 29.8v-2.5h-2.5v2.5h2.5z m27.3-2.5v-2.5h2.5v-19.8h-2.5v-2.5h-24.8v2.5h-2.5v19.8h2.5v2.5h24.8z m5 2.5v-2.5h-2.5v2.5h2.5z m-12.5-19.9h7.5v14.9h-17.4v-4.9h-7.4v-14.9h17.3v4.9z m-14.9 7.5h12.5v-10h-12.5v10z m19.9 5v-10h-5v7.5h-7.4v2.5h12.4z' })
                )
            );
        }
    }]);

    return FaObjectGroup;
}(React.Component);

exports.default = FaObjectGroup;
module.exports = exports['default'];