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

var IoWoman = function (_React$Component) {
    _inherits(IoWoman, _React$Component);

    function IoWoman() {
        _classCallCheck(this, IoWoman);

        return _possibleConstructorReturn(this, (IoWoman.__proto__ || Object.getPrototypeOf(IoWoman)).apply(this, arguments));
    }

    _createClass(IoWoman, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.8 11.6c0.3-0.9 1.4-2.5 3.3-2.6h3.8c1.9 0.1 2.9 1.7 3.3 2.6l2.2 8.2c0.5 1.8-1.6 2.5-2.1 0.7l-2-7.5h-0.7l3.6 13.3h-3.4v9.9c0 1.8-2.4 1.8-2.4 0v-9.9h-0.8v9.9c0 1.8-2.5 1.8-2.5 0v-9.9h-3.3l3.5-13.3h-0.5l-2.1 7.5c-0.6 1.7-2.6 1.1-2.1-0.7z m8.1-6.2c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9 2.9 1.3 2.9 2.9z' })
                )
            );
        }
    }]);

    return IoWoman;
}(React.Component);

exports.default = IoWoman;
module.exports = exports['default'];