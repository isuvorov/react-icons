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

var TiFolderOpen = function (_React$Component) {
    _inherits(TiFolderOpen, _React$Component);

    function TiFolderOpen() {
        _classCallCheck(this, TiFolderOpen);

        return _possibleConstructorReturn(this, (TiFolderOpen.__proto__ || Object.getPrototypeOf(TiFolderOpen)).apply(this, arguments));
    }

    _createClass(TiFolderOpen, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.2 13.3h-4c-0.7-2-2.5-3.3-4.7-3.3h-10c0-1.8-1.5-3.3-3.3-3.3h-6.9c-2.8 0-5 2.1-5 5v16.6c0 2.9 2.2 5 5 5h20c2.9 0 5.7-2.1 6.4-5l3.6-13.3c0.2-1-0.3-1.7-1.1-1.7z m-30.5 1.7v-3.3c0-1 0.6-1.7 1.6-1.7h6.7c0 1.8 1.5 3.3 3.3 3.3h10c1 0 1.7 0.7 1.7 1.7h-18.5c-1 0-1.8 0.7-2.2 1.7l-2.6 10.5v-12.2z m24.8 12.5c-0.3 1.3-1.8 2.5-3.2 2.5h-20s-0.6-0.3-0.3-1.3l3.2-11.7c0-0.2 0.3-0.3 0.5-0.3h22.8l-3 10.8z' })
                )
            );
        }
    }]);

    return TiFolderOpen;
}(React.Component);

exports.default = TiFolderOpen;
module.exports = exports['default'];