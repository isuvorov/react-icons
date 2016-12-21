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

var TiVolumeDown = function (_React$Component) {
    _inherits(TiVolumeDown, _React$Component);

    function TiVolumeDown() {
        _classCallCheck(this, TiVolumeDown);

        return _possibleConstructorReturn(this, (TiVolumeDown.__proto__ || Object.getPrototypeOf(TiVolumeDown)).apply(this, arguments));
    }

    _createClass(TiVolumeDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.2 9.7c-0.7 0-1.5 0.3-2.2 0.8l-4.5 2.9c-1.2 0.9-3.7 1.6-5.2 1.6-2.7 0-5 2.2-5 5v3.3c0 2.8 2.3 5 5 5 1.5 0 4 0.8 5.2 1.6l4.5 3c0.7 0.5 1.5 0.7 2.2 0.7 1.5 0 3.1-1.1 3.1-3.6v-16.7c0-2.5-1.6-3.6-3.1-3.6z m-11.9 15.3c-0.9 0-1.6-0.7-1.6-1.7v-3.3c0-0.9 0.7-1.7 1.6-1.7 2.1 0 4.9-0.8 6.7-1.9v10.5c-1.8-1.1-4.6-1.9-6.7-1.9z m11.7 5c0 0.1 0 0.1 0 0.2-0.1 0-0.1-0.1-0.2-0.1l-3.1-2.1v-12.7l3.1-2.1c0.1 0 0.1 0 0.2-0.1 0 0.1 0 0.2 0 0.2v16.7z m5.5-12.8c-0.7 0.6-0.7 1.7 0 2.3 0.6 0.6 0.9 1.4 0.9 2.2 0 0.8-0.3 1.5-0.9 2.1-0.7 0.7-0.7 1.7 0 2.4 0.3 0.3 0.7 0.5 1.2 0.5s0.8-0.2 1.1-0.5c1.3-1.2 1.9-2.8 1.9-4.5s-0.6-3.3-1.9-4.5c-0.6-0.7-1.7-0.7-2.3 0z' })
                )
            );
        }
    }]);

    return TiVolumeDown;
}(React.Component);

exports.default = TiVolumeDown;
module.exports = exports['default'];