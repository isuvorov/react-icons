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

var MdRestore = function (_React$Component) {
    _inherits(MdRestore, _React$Component);

    function MdRestore() {
        _classCallCheck(this, MdRestore);

        return _possibleConstructorReturn(this, (MdRestore.__proto__ || Object.getPrototypeOf(MdRestore)).apply(this, arguments));
    }

    _createClass(MdRestore, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 13.4h2.5v7l5.9 3.5-1.3 2-7.1-4.3v-8.2z m1.6-8.4c8.3 0 15 6.7 15 15s-6.7 15-15 15c-4.1 0-7.8-1.6-10.5-4.4l2.3-2.4c2.1 2.1 5 3.4 8.2 3.4 6.5 0 11.8-5.1 11.8-11.6s-5.3-11.6-11.8-11.6-11.6 5.1-11.6 11.6h5l-6.7 6.7-0.2-0.2-6.5-6.5h5c0-8.3 6.8-15 15-15z' })
                )
            );
        }
    }]);

    return MdRestore;
}(React.Component);

exports.default = MdRestore;
module.exports = exports['default'];