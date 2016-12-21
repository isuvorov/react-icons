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

var IoIosVolumeHigh = function (_React$Component) {
    _inherits(IoIosVolumeHigh, _React$Component);

    function IoIosVolumeHigh() {
        _classCallCheck(this, IoIosVolumeHigh);

        return _possibleConstructorReturn(this, (IoIosVolumeHigh.__proto__ || Object.getPrototypeOf(IoIosVolumeHigh)).apply(this, arguments));
    }

    _createClass(IoIosVolumeHigh, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.2 10c2.1 2.8 3.3 6.3 3.3 10s-1.2 7.2-3.3 10l-1.1-0.8c1.9-2.6 3.1-5.8 3.1-9.2s-1.2-6.6-3.1-9.2z m-4.2 17.5l-1.1-0.8c1.4-1.9 2.3-4.2 2.3-6.7s-0.9-4.8-2.3-6.7l1.1-0.8c1.6 2.1 2.5 4.7 2.5 7.5s-0.9 5.4-2.5 7.5z m-3.7-2.5l-1-0.8c0.9-1.2 1.4-2.6 1.4-4.2s-0.5-3-1.4-4.2l1-0.8c1.1 1.4 1.7 3.1 1.7 5s-0.6 3.6-1.7 5z m-9.3-8.1l5.5-4.4v15l-5.5-4.4h-4.5v-6.2h4.5z' })
                )
            );
        }
    }]);

    return IoIosVolumeHigh;
}(React.Component);

exports.default = IoIosVolumeHigh;
module.exports = exports['default'];