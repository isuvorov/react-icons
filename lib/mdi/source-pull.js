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

var MdiSourcePull = function (_React$Component) {
    _inherits(MdiSourcePull, _React$Component);

    function MdiSourcePull() {
        _classCallCheck(this, MdiSourcePull);

        return _possibleConstructorReturn(this, (MdiSourcePull.__proto__ || Object.getPrototypeOf(MdiSourcePull)).apply(this, arguments));
    }

    _createClass(MdiSourcePull, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,3C 7.65685,3 9,4.34315 9,6C 9,7.30622 8.16519,8.41746 7,8.8293L 7,15.1707C 8.16519,15.5825 9,16.6938 9,18C 9,19.6569 7.65685,21 6,21C 4.34314,21 3,19.6569 3,18C 3,16.6938 3.83481,15.5825 5,15.1707L 5,8.8293C 3.83481,8.41746 3,7.30622 3,6C 3,4.34315 4.34315,3 6,3 Z M 6,5.00001C 5.44771,5.00001 5,5.44772 5,6.00001C 5,6.55229 5.44771,7.00001 6,7.00001C 6.55228,7.00001 7,6.55229 7,6.00001C 7,5.44772 6.55228,5.00001 6,5.00001 Z M 6,17C 5.44771,17 5,17.4477 5,18C 5,18.5523 5.44771,19 6,19C 6.55228,19 6.99999,18.5523 6.99999,18C 6.99999,17.4477 6.55228,17 6,17 Z M 21,18C 21,19.6569 19.6568,21 18,21C 16.3431,21 15,19.6569 15,18C 15,16.6938 15.8348,15.5825 17,15.1707L 17,7.00001L 15,7.00001L 15,10.25L 10.75,6.00001L 15,1.75002L 15,5.00001L 17,5C 18.1046,5 19,5.89544 19,7.00001L 19,15.1707C 20.1652,15.5825 21,16.6938 21,18 Z M 18,17C 17.4477,17 17,17.4477 17,18C 17,18.5523 17.4477,19 18,19C 18.5523,19 19,18.5523 19,18C 19,17.4477 18.5523,17 18,17 Z ' })
                )
            );
        }
    }]);

    return MdiSourcePull;
}(React.Component);

exports.default = MdiSourcePull;
module.exports = exports['default'];