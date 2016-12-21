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

var Md3dRotation = function (_React$Component) {
    _inherits(Md3dRotation, _React$Component);

    function Md3dRotation() {
        _classCallCheck(this, Md3dRotation);

        return _possibleConstructorReturn(this, (Md3dRotation.__proto__ || Object.getPrototypeOf(Md3dRotation)).apply(this, arguments));
    }

    _createClass(Md3dRotation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 0c10.5 0 19.1 8 19.9 18.3h-2.5c-0.5-6.3-4.4-11.5-9.9-14.1l-2.3 2.2-6.3-6.3z m7.6 19.7c0-2.7-1.1-4.5-3.7-4.5h-1.6v9.6h1.5c2 0 3.2-1 3.6-2.6 0.2-0.6 0.2-1.2 0.2-1.9v-0.6z m-3.7-6.3c3 0 4.8 1.5 5.6 3.6 0.3 0.8 0.4 1.7 0.4 2.7v0.6c0 2.1-0.6 3.6-1.6 4.6s-2.4 1.7-4.5 1.7h-3.8v-13.2h3.9z m-7.7 6.4c1.2 0.5 2.2 1.5 2.2 3.1 0 0.6-0.2 1.1-0.4 1.6s-0.5 0.9-0.9 1.2c-0.7 0.6-1.8 0.9-3.1 0.9-2.4 0-4.2-1.2-4.2-3.6h2.1c0 1.2 0.9 1.9 2.1 1.9 1.4 0 2.2-0.6 2.2-2.1 0-1.5-1-2.1-2.4-2.1h-1.3v-1.7h1.3c1.3 0 2.2-0.6 2.2-2 0-1.3-0.7-1.9-2-1.9-1.1 0-2 0.6-2 1.8h-2.2c0-1.2 0.6-1.9 1.2-2.5 0.8-0.6 1.7-1 3-1 2 0 3.1 0.7 3.8 2.1 0.2 0.4 0.3 0.9 0.3 1.5 0 1.5-0.9 2.3-1.9 2.8z m-3.7 16l2.3-2.2 6.3 6.3-1.1 0.1c-10.5 0-19.1-8.1-19.9-18.4h2.5c0.6 6.3 4.4 11.6 9.9 14.2z' })
                )
            );
        }
    }]);

    return Md3dRotation;
}(React.Component);

exports.default = Md3dRotation;
module.exports = exports['default'];