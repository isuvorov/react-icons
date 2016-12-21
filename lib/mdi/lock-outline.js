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

var MdiLockOutline = function (_React$Component) {
    _inherits(MdiLockOutline, _React$Component);

    function MdiLockOutline() {
        _classCallCheck(this, MdiLockOutline);

        return _possibleConstructorReturn(this, (MdiLockOutline.__proto__ || Object.getPrototypeOf(MdiLockOutline)).apply(this, arguments));
    }

    _createClass(MdiLockOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,16.998C 10.8944,16.998 9.9994,16.1021 9.9994,14.998C 9.9994,13.894 10.8944,12.998 11.9994,12.998C 13.1034,12.998 13.9994,13.894 13.9994,14.998C 13.9994,16.1021 13.1034,16.998 11.9994,16.998 Z M 17.9994,19.998L 17.9994,9.99805L 5.9994,9.99805L 5.9994,19.998L 17.9994,19.998 Z M 17.9994,7.99805C 19.1034,7.99805 19.9994,8.89405 19.9994,9.99805L 19.9994,19.998C 19.9994,21.1021 19.1034,21.998 17.9994,21.998L 5.9994,21.998C 4.8944,21.998 3.9994,21.1021 3.9994,19.998L 3.9994,9.99805C 3.9994,8.89405 4.8944,7.99805 5.9994,7.99805L 6.9994,7.99805L 6.9994,5.99805C 6.9994,3.23706 9.23839,0.998053 11.9994,0.998053C 14.7604,0.998053 16.9994,3.23706 16.9994,5.99805L 16.9994,7.99805L 17.9994,7.99805 Z M 12,3.00001C 10.3431,3.00001 9,4.34315 9,6.00001L 9,8L 15,8L 15,6.00001C 15,4.34315 13.6568,3.00001 12,3.00001 Z ' })
                )
            );
        }
    }]);

    return MdiLockOutline;
}(React.Component);

exports.default = MdiLockOutline;
module.exports = exports['default'];