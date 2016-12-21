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

var TiCamera = function (_React$Component) {
    _inherits(TiCamera, _React$Component);

    function TiCamera() {
        _classCallCheck(this, TiCamera);

        return _possibleConstructorReturn(this, (TiCamera.__proto__ || Object.getPrototypeOf(TiCamera)).apply(this, arguments));
    }

    _createClass(TiCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.7 10h-2.7l-1.6-1.7c-1-0.9-2.7-1.6-4.1-1.6h-6.6c-1.4 0-3.1 0.7-4.1 1.6l-1.6 1.7h-2.7c-2.7 0-5 2.2-5 5v13.3c0 2.8 2.3 5 5 5h23.4c2.7 0 5-2.2 5-5v-13.3c0-2.8-2.3-5-5-5z m-11.7 16.7c-3.2 0-5.8-2.6-5.8-5.9 0-3.2 2.6-5.8 5.8-5.8s5.8 2.6 5.8 5.8c0 3.3-2.6 5.9-5.8 5.9z m10-7.9c-1.2 0-2.2-0.9-2.2-2.1s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.1-2.2 2.1z' })
                )
            );
        }
    }]);

    return TiCamera;
}(React.Component);

exports.default = TiCamera;
module.exports = exports['default'];