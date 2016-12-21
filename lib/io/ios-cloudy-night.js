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

var IoIosCloudyNight = function (_React$Component) {
    _inherits(IoIosCloudyNight, _React$Component);

    function IoIosCloudyNight() {
        _classCallCheck(this, IoIosCloudyNight);

        return _possibleConstructorReturn(this, (IoIosCloudyNight.__proto__ || Object.getPrototypeOf(IoIosCloudyNight)).apply(this, arguments));
    }

    _createClass(IoIosCloudyNight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.2 23.9c0.6 0 1.2-0.1 1.8-0.3-0.3 0.5-0.7 1.2-1.1 1.6-1.6 1.9-3.9 3.2-6.6 3.5h-0.2c0.3-0.8 0.6-1.7 0.6-2.5 0-1.7-0.7-3.4-1.9-4.6-1.1-1.1-2.6-1.8-4.2-1.8-0.4-1.3-1.2-2.3-2.2-3.2-0.8-0.6-1.6-1-2.5-1.3v-0.1c1.1-2.9 3.5-5.1 6.4-6.1 0.6-0.1 1.2-0.3 1.9-0.3-0.4 0.4-0.7 1-1 1.5-0.6 1.3-0.9 2.7-0.9 4.1 0 2.5 0.9 4.9 2.7 6.7s4.2 2.8 6.7 2.8h0.5z m-18.4-7.6c2.9 0 5.3 2.1 5.9 4.8h0.6c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1h-12.2c-2.2 0-4.1-1.8-4.1-4.1 0-2.1 1.6-4 3.7-4.2v-0.5c0-3.4 2.7-6.2 6.1-6.2z' })
                )
            );
        }
    }]);

    return IoIosCloudyNight;
}(React.Component);

exports.default = IoIosCloudyNight;
module.exports = exports['default'];